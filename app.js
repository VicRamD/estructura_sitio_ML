const express = require('express');
const path = require('path');

const server = express();

const pathPublic = path.join(__dirname, '/public');

server.use(express.static(pathPublic));

server.listen(3030, () => {
    console.log("Servidor corriendo");
});

server.get('/', (req, res) => {
    let pathHome = path.join(__dirname, '/views/home.html');
    res.sendFile(pathHome);
})