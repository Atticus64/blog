---
external: false
title: "Deno y Nodejs: empezamos el viaje"
description: "Diferencias centrales de Deno y Nodejs y porque es importante Deno"
author: Jonathan
date: 2023-05-26
---

## Origen de Deno y Nodejs

Para empezar con esta serie de tutoriales de Deno para developers que ya tienen experiencia usando Nodejs
me gustaría empezar por relatar de manera breve el como empezó la historia de este par de tecnologías.

Primeramente surgió Nodejs por el año 2009, esta tecnología permitió utilizar el lenguaje de programación JavaScript
del lado del servidor, es decir que ahora se podría ejecutar código js en cualquier computadora que tuviera esta tecnología instalada.
> Esto revoluciono la forma del desarrollo web tanto en el lado del servidor como en el del cliente

Salieron multiples tecnologías que usaban a nodejs para crear aplicaciones web, como lo son React, Vue.js y Angular,
pero el creador de Nodejs se arrepintió de muchas cosas que su tecnología había introducido al entorno de desarrollo 
entonces creo una nueva tecnología para enmendar sus antiguos errores que arrastro su tecnología.

* A día de hoy se usa mas Nodejs que Deno en entornos de producción 

## Que me ofrece Deno entonces?

Deno aprendió de los errores de su predecesor y facilita la vida del desarrollador en muchos sentidos

* Tiene el lenguaje Typescript integrado por defecto
* Esta escrito en Rust (lenguaje de bajo nivel moderno)
* Tiene un sistema de permisos que garantiza la seguridad de las librerías.
* Usa por completo la Standard Web API
* Mejor performance que Nodejs


### Introducción Practica

Haremos un ejercicio típico en Nodejs y lo pasaremos a Deno, una Api Rest con Express

Iniciamos el proyecto de nodejs con `npm`

```bash
mkdir express-hello
cd express-hello
npm init -y
```

Instalaremos nuestras dependencias que en este caso solo seria express.js 
el framework de javascript mas popular en backend para el entorno de nodejs

```bash
npm install express -E
```

La flag `-E` indica que instale la version exacta de la librería


En el archivo `package.json` agrega las siguientes lineas

```json
{
	"name": "express-hello",
	"version": "1.0.0",
+   "type": "module",
	"description": "",
	"main": "index.js",
	"scripts": {
+   	"dev": "node index.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"express": "4.18.2"
	}
}
```

Creamos un archivo index.js y agregamos el siguiente snippet de código

```javascript
import express from "express";

const main = function () {
	const app = express();
	const port = 3000;

	app.get("/", (_req, res) => {
		res.send("Deno api");
	});

	app.listen(port, function () {
		console.log(`listening on port http://localhost:${port}`);
	});

}

main()
```

Si ejecutamos en la terminal el comando `npm run dev` se empezara el servidor de express
y tendremos el siguiente resultado en el localhost:3000:

![express](/images/express.png)

## Ahora pasaremos este proyecto a Deno

Relacionaremos cada uno de los conceptos que ya conoces de Node para mostrar sus equivalentes

### 1. Instalar Deno 

Para ello primero instalaremos Deno con los siguientes comandos

* En Linux y Mac

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

* En Windows

```powershell
irm https://deno.land/install.ps1 | iex
```

### 2. Inicializamos el proyecto

Ahora una vez instalado podemos iniciar nuestro proyecto con el siguiente comando

```bash
deno init api-express
```

Esto nos creara una estructura de carpetas como esta

```bash
── api-express
   ├── deno.jsonc
   ├── main.ts
   ├── main_bench.ts
   └── main_test.ts
```

* vamos a eliminar los archivo `main_bench.ts`, `main_test.ts` y borraremos el código del archivo `main.ts`a, pero el archivo lo conservaremos

Vamos a crear un archivo llamado `import_map.json`, este archivo es 
el encargado de tener nuestras dependencias, como lo seria el apartado
`dependencies` en el archivo **package.json** en nodejs

```json
{
    "imports" : {
        "express": "https://esm.sh/express?target=denonext"
    }
}
```

Los paquetes en deno se importan por medio de url, en este caso estamos importando
express desde `esm.sh`

* En nuestro archivo `deno.jsonc` incluimos los scripts que podríamos tener, solo que en el entorno de deno se llaman tasks

```json
{
    "tasks": {
        "dev": "deno run -A main.ts"
    },
    "importMap": "./import_map.json"
}
```

#### Deno.json 

Este archivo dicta de donde sacara las dependencias, en este caso del `import_map.json` y también 
se escriben las tareas que podremos ejecutar con el comando `deno task`

#### Permisos Policy

En Deno, cuando ejecutamos un archivo de JavaScript o Typescript tenemos que comprometernos 
con saber que permisos ocupara nuestro programa, cuando se le pasa la flag -A se le dan todos los permisos 
cosa que no se recomienda por seguridad, entonces mejor especificamos que permisos ocupa

Por ejemplo si queremos ejecutar el siguiente snippet en el main.ts no ocupamos permisos
y perfectamente funcionaria el comando `deno task dev`

```javascript
console.log("Hola Deno")
```

* Pero si queremos acceder a la red ocupamos el permiso --allow-net, como en el siguiente ejemplo

```javascript
import { createServer } from "node:http";
import process from "node:process";

const server = createServer((req, res) => {
  const message = `Hello from ${process.env.DENO_REGION} at ${new Date()}`;
  res.end(message);
});

server.listen(8080)
```

Podemos ejecutar código de algunos paquetes de node mediante el prefijo `"node:"`

Ahora sabiendo esto, podemos agregarle el permiso de --allow-net

```json
{
    "tasks": {
        "dev": "deno run --allow-net main.ts"
    },
    "importMap": "./import_map.json"
}
```

Ahora incluiremos express en el código de main.ts

```typescript
import express, {Request, Response} from "express";

const main = function() {
    const app = express();
    const port = 8000;

    app.get("/", (_req: Request, res: Response) => {
        res.send("Deno api");
    });

    app.listen(port, function() {
        console.log(`listening on port http://localhost:${port}`);
    });

}

main()
```

Al tratar de ejecutar nos saldrá un error de permisos, porque para ejecutar express
ademas de darle permisos de network debemos darle los permisos del directorio y del entorno

![](/images/permission.png)


* Podemos presionar y para darle los permisos de en esta ejecución, pero para mantenerlo constante lo agregamos al deno.jsonc

```json
{
	"tasks": {
		"dev": "deno run --allow-env --allow-net --allow-cwd main.ts"
	},
	"importMap": "./import_map.json"
}
```

Ahora si cuando ejecutemos deno task dev deberíamos tener el mismo resultado que con nodejs


* Muchas gracias por leer, continuare haciendo esta serie de blog post sobre deno

_Atte. Jonathan_


