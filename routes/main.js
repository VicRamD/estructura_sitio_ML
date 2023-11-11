const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    let pathHome = path.join(process.cwd(), '/views/home.html');
    console.log(process.cwd());
    res.sendFile(pathHome);
});

router.post('/', (req, res) => {
    let pathHome = path.join(process.cwd(), '/views/home.html');
    res.sendFile(pathHome);
});

router.get('/register', (req, res)=>{
    let pathRegister = path.join(process.cwd(), '/views/register.html');
    res.sendFile(pathRegister);
});

router.get('/login', (req, res)=>{
    let pathLogin = path.join(process.cwd(), '/views/login.html');
    res.sendFile(pathLogin);
});

module.exports = router;