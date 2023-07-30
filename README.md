# Insidencias Campus

## Gestion de Insidensias tecnicas

Este aplicativo permite llevar la gestion de insidencias tecnicas en cada una de las salas del establecimiento (Campus).

## Modelo Relacional

A continuacion se presenta el modelo relacional de la base de datos utilizado en el proyecto.

[![modeloRelacionalBD](imgs/modeloRelacionalBD.png)](imgs/modeloRelacionalBD.png)

## Requisitos del sistema

- Node.js y NPM (Node Package Manager) instalados en el sistema.
- MySQL Server instalado

# Dependencias del Proyecto

Las dependencias que se utilizan en este proyecto son las siguientes:
```Json
    "dependencies": {
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "mysql2": "^3.5.2"
    },
    "devDependencies": {
        "class-transformer": "^0.5.1",
        "class-validator": "^0.14.0",
        "jose": "^4.14.4",
        "nodemon": "^3.0.1",
        "reflect-metadata": "^0.1.13",
        "typescript": "^5.1.6"
    }
```

# Instalacion

1. Clona este repositorio:
    ```bash
    https://github.com/dVera17/insidenciasCampus.git
    ```
2. Instala las dependencias con el comando:
    ```bash
    npm install
    ```
3. Crea un archivo .env y copia las variables de entorno del archivo .env.example y colocar sus valores, ejemplo:
    ```Javascript
    // .env
    JWT_PRIVATE_KEY="tu clave secreta para json web token"
    PORT_SERVER = 5010
    DB_HOST = 'host de la base de datos'
    DB_USER = 'tu usuario de la base de datos'
    DB_PASSWORD = 'tu password de la base de datos'
    DB_DATABASE = 'el nombre de la base de datos'
    ```

## Seguridad y autenticacion

Este proyecto implementa un sistema de autenticación basado en JWT (JSON Web Token) para proteger los endpoints y garantizar un acceso seguro a la API. JWT es un estándar ampliamente utilizado para la autenticación y autorización en aplicaciones web modernas. Por el momento se utiliza un unico token de acceso publico para la autorización.

### Autenticación con JWT

Para obtener el token de autorizacion debes enviar una solicitud GET al endpoint `/api/token/:nombre`, por ejemplo, `localhost:5010/token/ronaldo`, de esta forma el servidor generará un token firmado que contendrá esta información y se lo devolvera al cliente en la respuesta.

### Manejo de Tokens Expirados

Para garantizar la seguridad, los tokens JWT tienen una tiempo de expiración, en este caso tienes una hora. Una vez que un token ha expirado, el cliente debe obtener un nuevo token al autenticarse nuevamente en la API.

### Requisitos para la Generación de Tokens

Los tokens JWT generados por la aplicación utilizan el algoritmo de firma "HS256" (HMAC con SHA-256) para garantizar la integridad del token. La longitud del token y otros detalles de configuración se han establecido siguiendo las mejores prácticas de seguridad.

Para obtener más información sobre JWT, te recomendamos revisar el siguiente recurso:
- [JSON Web Token (JWT) Introduction](https://jwt.io/introduction/)

## Descripción de Endpoints

### Area: `area.routes.js`

Este archivo maneja las diferentes solicitudes relacionadas con la información de las areas y tipos de areas en Campus.

1. `GET /api/area`
    - Descripción: Obtiene todas las areas registradas en la base de datos
    - Controllador asociado: `getAllAreas`

2. `GET /api/area/tipo_area`
    - Descripción: Obtiene todas las areas registradas en la base de datos
    - Controllador asociado: `getAllTipoArea`

### Dispositivo: `dispositivo.routes.js`

Este archivo maneja las diferentes solicitudes relacionadas con los dispositivos (computadores, teclados, mouses y auriculares) que pueden ser asignados a las diferentes areas.

1. `GET /api/dispositivo`
    - Descripción: Obtiene todas los dispositivos registrados en la base de datos
    - Controllador asociado: `getDispositivos`

2. `GET /api/dispositivo/tipo_dispositivo`
    - Descripción: Obtiene todas los tipos de dispositivos registrados en la base de datos
    - Controllador asociado: `getAllTipoDispositivos`

3. `POST /api/dispositivo`
    - Descripción: Agrega un dispositivo nuevo a la base de datos
    - Controllador asociado: `addDispositivo`

    Este es un ejemplo de como debe ir el json que se envía en el body:
    ```Json
    {
        "serial": 1122, 
        "marcaDisp": "lenovo",
        "modeloDisp": "modelo lenovo",
        "idTipoDisp": 1,
        "idArea": 1
    }
    ```

### Insidencia: `insidencia.routes.js`

Este archivo maneja las diferentes solicitudes relacionadas con las insidencias tecnicas.

1. `GET /api/insidencia`
    - Descripción: Obtiene todas las insidencias registrados en la base de datos
    - Controllador asociado: `getAllInsidencias`

2. `POST /api/insidencia`
    - Descripción: Agrega una insidencia a la base de datos
    - Controllador asociado: `addInsidencia`

    Este es un ejemplo de como debe ir el json que se envía en el body:
    ```Json
    {
        "descInsidencia": "descripcion",
        "idCategoria": 1,
        "idTipoInsidencia": 1,
        "idArea": 1,
        "cedulaTrainer": 1234567890
    }
    ```

### Trainer: `trainer.routes.js`

Este archivo maneja las diferentes solicitudes relacionadas con los trainers de Campus.

1. `GET /api/trainer`
    - Descripción: Obtiene todos los trainers registrados en la base de datos
    - Controllador asociado: `getDataTrainers`

2. `GET /api/trainer/:cedula`
    - Descripción: Obtiene el trainer especificado, se obtiene por su cedula
    - Controllador asociado: `getDataTrainer`

3. `POST /api/trainer`
    - Descripción: Agrega una trainer a la base de datos
    - Controllador asociado: `addTrainer`

    Este es un ejemplo de como debe ir el json que se envía en el body:
    ```Json
    {
        "cc": 1234567891,
        "name": "Federico",
        "emailPersonal": "fede@fede.com",
        "emailCorporativo": "fede@fede.com",
        "telefonoResidencia": "3181234567",
        "telefonoEmpresa": "3181234567",
        "telefonoMovilEmpresa": "3181234567"
    }
    ```

## Iniciacion del servidor

Para empezar a utilizar la aplicacion, abre tu terminal y ejecuta el siguiente comando.
```bash
npm run dev
```