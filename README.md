# restAPI de NodeJS en Docker

## NodeJS

### generamos package.json
`npm init -y`

### instalamos express
`npm i express`

### creamos estructura de carpetas y archivos
```bash
├───src/
│   ├───routes/
│   │   └───index.js
│   ├───app.js
│   └───index.js
├───package-lock.json
├───package.json
└───README.md
```

### agregamos code a src/app.js
```javascript
const express = require('express');
const app = express();

app.use(require('./routes/index'));

module.exports = app;
```

### agregamos code a src/routes/index.js
```javascript
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        'msg': 'Adipisicing sit incididunt.'
    });
});

module.exports = router;
```

### agregamos code a src/index.js
```javascript
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`server en port ${port}`)});
```

### ejecutamos la aplicación
`node src/index.js`

http://localhost:3000

### creamos .dockerignore
```
node-modules
npm-debug.log
```

### creamos DockerFile
```
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/index.js"]
```

## Docker

### creamos imágen
`docker build -t restapi .`

### comprobamos que se haya creado la imágen
`docker images`

### ejecutamos la imágen
`docker run -it -p 80:3000 restapi`

http://localhost:80
