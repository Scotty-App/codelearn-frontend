
# CodeLearn - Frontend

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

## Estructura del proyecto

```
├── index.html       → Landing principal con botones de acceso
├── signup.html      → Registro de usuario
├── login.html       → Inicio de sesión
├── app.html         → Aplicativo con los lenguajes disponibles
└── estilo.css       → Estilos compartidos
```

## Cómo funciona

1. El usuario llega a `index.html` y puede:
   - **Comenzar** → accede directamente a la app
   - **Ya tengo cuenta** → va al login
   - **Registrarme** → va al formulario de registro

2. En `signup.html` introduce sus datos. Se guardan en `localStorage`.

3. En `login.html` introduce email y contraseña. Se comparan con los datos guardados.

4. En `app.html` ve los lenguajes disponibles y su nombre de usuario si está registrado.


## Almacenamiento de datos

Los datos del usuario se guardan en `localStorage` del navegador.  
No requiere servidor ni base de datos.

## Módulo

**Lenguaje de Marcas y Sistemas de Gestión de Información**  
1º DAW · Curso 2025-2026
