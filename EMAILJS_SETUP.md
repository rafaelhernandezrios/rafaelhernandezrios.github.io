# Configuración de EmailJS para el Formulario de Contacto

## Español / English

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe mensajes reales.

This document explains how to set up EmailJS so the contact form sends real messages.

---

## Pasos para Configurar EmailJS / Steps to Set Up EmailJS

### 1. Crear una Cuenta en EmailJS / Create an EmailJS Account

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (hasta 200 emails/mes)
3. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
4. Create a free account (up to 200 emails/month)

### 2. Configurar un Servicio de Email / Set Up an Email Service

1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Guarda el **Service ID** que se genera
6. In the dashboard, go to **Email Services**
7. Click **Add New Service**
8. Select your email provider (Gmail, Outlook, etc.)
9. Follow the instructions to connect your account
10. Save the **Service ID** that is generated

### 3. Crear una Plantilla de Email / Create an Email Template

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa esta estructura para la plantilla:
   - **To Email**: Tu dirección de email (ej: e.r.hdez94@gmail.com)
   - **Subject**: `{{subject}}`
   - **Content**:
     ```
     From: {{from_name}}
     Email: {{from_email}}
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
4. Guarda el **Template ID** que se genera
5. Go to **Email Templates**
6. Click **Create New Template**
7. Use this structure for the template:
   - **To Email**: Your email address (e.g., e.r.hdez94@gmail.com)
   - **Subject**: `{{subject}}`
   - **Content**:
     ```
     From: {{from_name}}
     Email: {{from_email}}
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
8. Save the **Template ID** that is generated

### 4. Obtener tu Public Key / Get Your Public Key

1. Ve a **Account** > **General**
2. Copia tu **Public Key** (también llamado API Key)
3. Go to **Account** > **General**
4. Copy your **Public Key** (also called API Key)

### 5. Configurar en el Código / Configure in Code

Tienes dos opciones / You have two options:

#### Opción A: Variables de Entorno (Recomendado) / Option A: Environment Variables (Recommended)

1. Crea un archivo `.env` en la raíz del proyecto:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

2. Asegúrate de que `.env` esté en `.gitignore` para no subir tus credenciales
3. Create a `.env` file in the project root:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Make sure `.env` is in `.gitignore` so you don't upload your credentials

#### Opción B: Editar Directamente el Código / Option B: Edit Code Directly

1. Abre `src/components/Contact/Contact.js`
2. Reemplaza los valores en las líneas 13-15:
   ```javascript
   const EMAILJS_SERVICE_ID = 'tu_service_id_real';
   const EMAILJS_TEMPLATE_ID = 'tu_template_id_real';
   const EMAILJS_PUBLIC_KEY = 'tu_public_key_real';
   ```
3. Open `src/components/Contact/Contact.js`
4. Replace the values in lines 13-15:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_real_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_real_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_real_public_key';
   ```

### 6. Probar el Formulario / Test the Form

1. Reinicia el servidor de desarrollo si usaste variables de entorno
2. Llena el formulario y envía un mensaje de prueba
3. Deberías recibir el email en tu bandeja de entrada
4. Restart the development server if you used environment variables
5. Fill out the form and send a test message
6. You should receive the email in your inbox

---

## Fallback a mailto: / Fallback to mailto:

Si EmailJS no está configurado, el formulario automáticamente usará `mailto:` como respaldo, abriendo el cliente de email predeterminado del usuario.

If EmailJS is not configured, the form will automatically use `mailto:` as a fallback, opening the user's default email client.

---

## Solución de Problemas / Troubleshooting

### El mensaje no se envía / Message doesn't send

- Verifica que todos los IDs y keys estén correctos
- Revisa la consola del navegador para errores
- Asegúrate de que el servicio de email esté activo en EmailJS
- Check that all IDs and keys are correct
- Check the browser console for errors
- Make sure the email service is active in EmailJS

### Error 400 / 400 Error

- Verifica que los nombres de las variables en la plantilla coincidan (`from_name`, `from_email`, `subject`, `message`)
- Check that the variable names in the template match (`from_name`, `from_email`, `subject`, `message`)

### Límite de emails alcanzado / Email limit reached

- El plan gratuito tiene un límite de 200 emails/mes
- Considera actualizar a un plan de pago si necesitas más
- The free plan has a limit of 200 emails/month
- Consider upgrading to a paid plan if you need more

---

## Recursos Adicionales / Additional Resources

- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

