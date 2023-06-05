# Registro de Llamadas Telefónicas

## Descripción
El proyecto consiste en desarrollar una aplicación de escritorio utilizando JavaScript, CSS, HTML, Vite y Electron. Esta aplicación tiene como objetivo proporcionar una forma fácil y eficiente de gestionar y guardar registros de llamadas telefónicas realizadas en el trabajo. Como secretario, necesito una herramienta que me permita almacenar la información relevante de las llamadas de manera ordenada y accesible.

## Características

- Interfaz de usuario intuitiva y amigable.
- Registro de llamadas con los siguientes campos:
  - Nombre del contacto.
  - Número de teléfono.
  - Fecha y hora de la llamada.
  - Notas adicionales.
- Funcionalidad de búsqueda para encontrar llamadas específicas. (pendiente)
- Capacidad para exportar e importar registros en formato CSV. (pendiente)
- Opción para filtrar y ordenar los registros de llamadas. (pendiente)
- Integración con la aplicación de correo electrónico para enviar registros por correo electrónico. (pendiente)

## Tecnologías Utilizadas

- JavaScript: Lenguaje de programación principal.
- CSS: Estilos para el diseño de la interfaz de usuario.
- HTML: Estructura y marcado de la aplicación.
- Vite: Herramienta de construcción y desarrollo rápido de aplicaciones web.
- Electron: Framework para crear aplicaciones de escritorio multiplataforma con tecnologías web.

## Estructura de Carpetas

- **src**: Contiene el código fuente de la aplicación.
  - **css**: Archivos CSS para estilos personalizados.
  - **js**: Archivos JavaScript con lógica de la aplicación.
  - **html**: Archivos HTML que definen la estructura de la aplicación.
- **dist**: Carpeta generada por Vite que contiene los archivos compilados y empaquetados para distribución.

## Instrucciones de Ejecución

1. Clonar el repositorio del proyecto desde [URL del repositorio].
2. Abrir el proyecto en Visual Studio Code.
3. Abrir una terminal y ejecutar el siguiente comando para instalar las dependencias:

   ```bash
npm install
```

Ejecutar el siguiente comando para iniciar la aplicación en modo de desarrollo:

```bash
npm run dev
```

Para construir la aplicación para distribución, ejecutar el siguiente comando:

```bash
npm run build
```

