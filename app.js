const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main');

const server = express();

const pathPublic = path.join(__dirname, '/public');

server.set('view engine', 'ejs');
server.use(express.static(pathPublic));

const port = process.env.PORT || 3030

server.listen(port, () => {
    /*console.log(`Servidor corriendo en http://localhost:3030/`); */
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});

server.use('', mainRoutes);