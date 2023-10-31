const express = require('express');
const path = require('path');

const server = express();

const pathPublic = path.join(__dirname, '/public');

server.use(express.static(pathPublic));

server.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030/");
});

server.get('/', (req, res) => {
    let pathHome = path.join(__dirname, '/views/home.html');
    res.sendFile(pathHome);
});

server.post('/', (req, res) => {
    let pathHome = path.join(__dirname, '/views/home.html');
    res.sendFile(pathHome);
});

server.get('/register', (req, res)=>{
    let pathRegister = path.join(__dirname, '/views/register.html');
    res.sendFile(pathRegister);
});

server.get('/login', (req, res)=>{
    let pathLogin = path.join(__dirname, '/views/login.html');
    res.sendFile(pathLogin);
});