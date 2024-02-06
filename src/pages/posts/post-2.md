---
layout: ../../layouts/PostLayout.astro
title: "Cómo crear un proyecto con Astro"
pubDate: 2024-02-06
description: "Este es la segunda publicación de mi nuevo blog Astro."
author: "Alumno de Astro"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "El logotipo completo de Astro."
tags: ["astro", "bloguear", "npm"]
url: "post-2"
---

Astro es un framework web que te permite crear sitios web rápidos, orientados al contenido y con tu librería JavaScript favorita1. En este post, te voy a enseñar cómo crear un proyecto básico con Astro en pocos minutos.

## Paso 1: Instalar Astro

Para instalar Astro, necesitas tener Node.js y npm en tu ordenador. Luego, puedes ejecutar el siguiente comando en tu terminal:

```bash
npm install -g astro
```

> Esto instalará Astro de forma global en tu sistema.

O también se puede crear un proyecto con el siguiente comando:

```bash
npx create-astro
```

## Paso 2: Crear un proyecto

Para crear un nuevo proyecto con Astro, puedes usar el comando:

```bash
astro init mi-proyecto
```

> Si creaste el proyecto con `npx create-astro`, no es necesario ejecutar este comando.

Esto creará una carpeta llamada mi-proyecto con la estructura básica de un sitio web de Astro. Dentro de esta carpeta, encontrarás los siguientes archivos y carpetas:

- `src/`: Aquí es donde pondrás todos tus archivos de Astro, componentes, páginas, estilos, etc.
- `public/`: Aquí es donde se guardará el resultado de compilar tu proyecto. Esta es la carpeta que subirás a tu servidor web para desplegar tu sitio.
- `astro.config.mjs`: Aquí es donde podrás configurar algunas opciones de Astro, como el puerto, el adaptador, las variables de entorno, etc.
- `package.json`: Aquí es donde se guardarán las dependencias y los scripts de tu proyecto.

## Paso 3: Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo de Astro, puedes usar el comando:

```bash
npm start
# or
npm run dev
```

Esto abrirá una ventana en tu navegador con la dirección `http://localhost:4321`, donde podrás ver tu sitio web en vivo. Si haces cambios en tu código, el sitio se actualizará automáticamente.

## Paso 4: Personalizar tu sitio

Ahora que tienes tu proyecto creado, puedes empezar a personalizarlo a tu gusto. Puedes añadir estilos globales en el archivo src/global.css, crear componentes en la carpeta src/components, crear páginas en la carpeta src/pages y usar la sintaxis de Astro para combinar HTML, JavaScript y tu librería UI preferida.

Para aprender más sobre Astro, puedes consultar la documentación oficial, donde encontrarás tutoriales, guías, recetas y referencias o puedes seguirme en mi blog para más tutoriales y consejos.

¡Espero que te haya gustado este post y que te animes a probar Astro!
