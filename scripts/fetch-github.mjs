// Regenerates src/data/github.json from the GitHub API.
// Runs in the deploy workflow before `astro build`. If the API is unreachable
// the committed snapshot is kept, so the build never fails because of GitHub.
//
//   GITHUB_TOKEN=... node scripts/fetch-github.mjs
import { writeFile, readFile } from 'node:fs/promises';

const USER = process.env.GITHUB_USER || 'rafaelhernandezrios';
const OUT = new URL('../src/data/github.json', import.meta.url);
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio`,
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  return res;
}

/** First meaningful sentence of a README (skips headings, badges, code, lists). */
function readmeSummary(md) {
  let inCode = false;
  for (const raw of md.split('\n')) {
    const s = raw.trim();
    if (s.startsWith('```')) { inCode = !inCode; continue; }
    if (inCode || !s) continue;
    if (/^(#|!|\[!|<|\||---|>|[-*+] |\d+\.|`|\$|git |npm |pip |python )/.test(s)) continue;
    if (/[(){};=]\s*$/.test(s) && /\w+\(.*\)/.test(s)) continue; // looks like code
    return s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').slice(0, 240);
  }
  return '';
}

/** First image referenced in a README, as an absolute URL. */
function readmeImage(md, repo, branch) {
  const m = md.match(/!\[[^\]]*\]\(([^)\s]+)[^)]*\)/) || md.match(/<img[^>]+src=["']?([^"'\s>]+)/i);
  if (!m) return null;
  let url = m[1];
  if (/shields\.io|badge|githubassets|\.svg(\?|$)/i.test(url)) return null;
  if (url.startsWith('http')) {
    return url.replace(/github\.com\/([^/]+)\/([^/]+)\/blob\//, 'raw.githubusercontent.com/$1/$2/');
  }
  url = url.replace(/^\.?\//, '');
  return `https://raw.githubusercontent.com/${USER}/${repo}/${branch}/${url}`;
}

async function main() {
  const res = await gh(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`);
  const all = await res.json();
  const repos = all.filter((r) => !r.fork && !r.archived && !r.private);

  const out = [];
  for (const r of repos) {
    let description = r.description || '';
    let image = null;
    try {
      const md = await (await fetch(`https://raw.githubusercontent.com/${USER}/${r.name}/${r.default_branch}/README.md`, { headers: { 'User-Agent': headers['User-Agent'] } })).text();
      if (!md.startsWith('404')) {
        if (!description) description = readmeSummary(md);
        image = readmeImage(md, r.name, r.default_branch);
      }
    } catch { /* README is optional */ }
    out.push({
      name: r.name,
      description,
      language: r.language,
      pushedAt: r.pushed_at,
      stars: r.stargazers_count,
      topics: r.topics || [],
      homepage: r.homepage || null,
      image,
      url: r.html_url,
    });
  }

  await writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), source: 'api', repos: out }, null, 2) + '\n');
  console.log(`github.json: ${out.length} repos`);
}

main().catch(async (err) => {
  const prev = JSON.parse(await readFile(OUT, 'utf8').catch(() => '{"repos":[]}'));
  console.warn(`GitHub sync skipped (${err.message}); keeping snapshot with ${prev.repos.length} repos.`);
});
