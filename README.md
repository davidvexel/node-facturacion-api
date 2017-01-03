# Facturación en Node

Usando la API de factura.com

Es necesario tener una cuenta en factura.com con folios disponibles y acceso a la API antes de usar este script. 

Documentacion de la API:
http://docs.facturacom.apiary.io/ 

## Uso

Clona este repositorio en la carpeta de tu preferencia

`git@github.com:davidvexel/node-facturacion-api.git`

Después instala los modulos

`cd node-facturacion-api`

`npm install`

Para correr este script localmente utiliza los siguientes comandos:

`npm build`

`node dist/index.js`


## Automatización

- Puedes agregar este script a tu *crontab* para correr los dias de nomina. Ejemplo usando crontab:

`00 09 15,30 * * /desarrollo/junkyard/node-facturacion-api/dist/index.js`

De esta manera correra todo los dias 15 y 30 a las 9:00am.

