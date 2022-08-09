# Prueba tecnica empresa "Soleit"

![screenshot](/readme/screenshot.png)

## Descripción

Prueba técnica para la empresa "Soleit" que consiste en una web app creada con React JS usando el framework Ionic la cual debe contener una vista de inicio de sesión y otra vista de "usuario" donde se muestran planos cartesianos con puntos (x,y) que se reciben desde un servidor.

## Desarrollador

* [Oscar Uribe](https://github.com/aenema25)

## Live versión

* [Netlify]()

## Credenciales

Las credenciales para utilizar esta web app son las siguientes:

* Usuario: oscar
* Contraseña: 6Xk5Q05%CHuJ


## Tecnologias usadas

* ![react](/readme/react.svg)[React JS](https://reactjs.org/docs/getting-started.html)
* ![ionic](/readme/ionic.svg)[Ionic Framework](https://ionicframework.com/docs/)
* ![css](/readme/css3.svg)CSS
* ![javascript](/readme/javascript.svg)Javascript

## Replicar localmente

Para replicar esta web app seguir los siguientes pasos:

1.- Clonar localmente el repositorio y luego navegar a la carpeta

```bash
git clone https://github.com/aenema25/pruebatecnica-soleit.git
cd pruebatecnica-soleit
```
2.- Crear un archivo ```.env``` y crear una variable de entorno ```REACT_APP_API_URL``` en la cual debe ir la dirección web de la api que distribuye los datos a la web app

3.- Ejecutar el siguiente comando para correr el servidor, recordar agregar la extensión ```--https``` para generar una conexión segura.

```bash
ionic serve --https
```

El servidor se ejecutará localmente en el puerto por defecto ```8100``` , si desea ejecutar la web app en un puerto diferente agregar la opción ```-p``` junto con el número del puerto.

```bash
ionic serve ---https -p=PUERTO
```