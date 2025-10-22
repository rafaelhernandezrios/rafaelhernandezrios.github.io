@echo off
echo 🚀 Iniciando deployment a GitHub Pages...
echo.

echo 📦 Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias
    pause
    exit /b 1
)

echo.
echo 🔨 Construyendo aplicación...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Error construyendo aplicación
    pause
    exit /b 1
)

echo.
echo 📤 Desplegando a GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ❌ Error desplegando
    pause
    exit /b 1
)

echo.
echo ✅ Deployment completado exitosamente!
echo 🌐 Tu sitio estará disponible en: https://rafaelhernandezrios.github.io
echo.
pause
