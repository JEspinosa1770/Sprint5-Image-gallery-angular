# Galería de imágenes

Este proyecto ha sido generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.10.

## Tabla de contenidos
1. [Descripción](#descripción)
1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
2. [Compilación](#compilación)
2. [Test unitarios](#test-unitarios)
7. [Tecnologías usadas](#tecnologías)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Componentes](#componentes)
5. [Decisiones y Justificaciones](#decisiones-y-justificaciones)
5. [Vistas del proyecto](#vistas-del-proyecto)
6. [🎁 Demo](#-demo)
8. [Contribuciones y Contacto](#contribuciones-y-contacto)

## Descripción
Este proyecto consiste en desarrollar una aplicación de una galería de imágenes que permite realizar ciertas acciones con ellas. El proyecto se está desarrollando con Angular.

## Requisitos
Para poder ejecutar y desarrollar el proyecto, necesitas tener instalado en tu sistema:

* **Node.js**: Se recomienda la versión LTS (Long Term Support).
* **npm** o **Yarn** (o cualquier otro gestor de paquetes de Node.js).
* **Angular CLI**: versión 20.

Opcionalmente se recomienda:
* **Git**: para el control de versiones.
* **Visual Studio Code** o cualquier otro editor de código.

## Instalación

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias.

1. Accede a la carpeta local donde quieres clonar el repositorio.
2. Clona el repositorio con la terminal bash:
```bash
$ git clone https://github.com/JEspinosa1770/Sprint5-Image-gallery-angular
```
3. Ves a la carpeta del proyecto:
```bash
$ cd image-gallery
```
4. Si no lo tienes ya instalado, instala las dependencias del proyecto:
```bash
$ npm install
```
5. Ejecuta el proyecto:
```bash
$ ng serve
```
Una vez el servidor esté en marcha, abre el navegador y ves a la dirección `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifique cualquiera de los archivos de origen.


## Compilación

Para construir el proyecto ejecute:

```bash
ng build
```

Esto compilará su proyecto y almacenará los archivos de compilación en el directorio `dist/`. De forma predeterminada, la compilación de producción optimiza el rendimiento y la velocidad de tu aplicación.

## Test unitarios

Para ejecutar los test unitarios con [Karma](https://karma-runner.github.io), usa la siguiente instrucción:

```bash
ng test
```

## Tecnologías
* HTML5 y CSS3 
* TypeScript
* Angular 20 

## Estructura del proyecto
```
src/
 └─ app/
     ├─ components/
     │   ├─ image-item/
     │   │   ├─ image-item.ts
     │   │   ├─ image-item.html
     │   │   ├─ image-item.css
     │   │   └─ image-item.spec.ts
     │   └─ gallery/
     │       ├─ gallery.ts
     │       ├─ gallery.html
     │       ├─ gallery.css
     │       └─ gallery.spec.ts
     └─ models/
         └─ image.ts
```
## Componentes

### image-item
- se encarga de mostrar una imagen y su título.
- tiene un icono de papelera para borrar la imagen.
- cuando la papelera es pulsada y se confirma el borrado, se dispara un evento que el padre recogerá.

Contiene la clase ImageItem. Usa las signals `input` para mostrar la imagen y para identificar si es la primera, y `output`para lanzar el evento que recogerá el padre para borrar una imagen.

Solo tiene la función `sendToParent`, encargada de emitir el evento al padre.

### gallery
- forma la galería de imágenes.
- destaca la primera imagen ocupando dos filas y dos columnas del grid.

Contiene la clase Gallery. Contiene el array con la lista de imágenes y sus datos asociados.

Tiene las funciones:
- `filterDeletedImages()`: se encarga de filtrar las imágenes que no están marcadas como borradas.
- `onNotify()`: gestiona el evento lanzado por el hijo para borrar una imagen.

## Decisiones y Justificaciones

### Datos 
La primera decisión que he tenido que afrontar al crear este proyecto es la estructura de datos que conformaría un elemento imagen. Decidí darle unas propiedades que podrían servir para ampliaciones futuras de la funcionalidad.
La estructura se define en `image.ts` de la carpeta `models`, y es la siguiente:
```js
export interface Image {
    id: number,
    source: string,
    alt: string,
    title: string,
    selected: boolean,
    deleted: boolean
}
```
Tomé la decisión de manejar el borrado de imágenes activando la propiedad booleana `deleted`, para poder tener siempre la opción de recuperar la imagen (característica no implementada). De esta manera, siempre se visualizan las imágenes que tienen esa propiedad en `false`. Por eso la función `filterDeletedImages()` se encarga únicamente de devolver un array con las imágenes que tienen esa propiedad en `false`.

De la misma manera, preví la propiedad `selected` para el caso de hacer selecciones múltiples (característica no implementada).

### Componentes
Están bien definidos en el enunciado del proyecto.

Un componente atómico que será el encargado de mostrar la imagen y su título, así como el botón de la papelera para borrar la imagen.

Un componente padre que formará la galería, se encargará de la gestión del evento emitido por el hijo para el borrado de una imagen, y resaltará la imagen que esté en primera posición del array de imágenes. 

Para esto último tomé la decisión de utilizar la propiedad `$first` que nos brinda la instrucción `@for` que itera sobre el array de datos a visualizar. Esto nos permite tener identificado siempre el primer elemento del array de datos, siendo un control dinámico perfecto.

### Proyecto
He intentado mantener un código limpio, libre de repeticiones y de malas prácticas. Me he apoyado para ello en herramientas de evaluación como [Wave](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh).

## Vistas del proyecto
Vista general
![Vista general](./public/paginaprincipal.gif)

Proceso de borrado
![Proceso de borrado](./public/procesoborrado.gif)

## Demo

Puede verse una demo del proyecto en su estado actual en:

[Demo en GitHub Pages](https://jespinosa1770.github.io/Sprint5-Image-gallery-angular/)

## Contribuciones y Contacto
Este proyecto ha sido desarrollado por **Jordi Espinosa** como parte de unos ejercicios sobre Angular.

Cualquier sugerencia o consulta, contactad con: **[JEspinosa](https://github.com/JEspinosa1770)**
