const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');

/*router.get('/', (req, res) => {
    let pathHome = path.join(process.cwd(), '/views/home.html');
    console.log(process.cwd());
    res.sendFile(pathHome);
}); */

router.get('/', mainController.index);

router.post('/', (req, res) => {
    let pathHome = path.join(process.cwd(), '/views/home.html');
    res.sendFile(pathHome);
});

/*router.get('/register', (req, res)=>{
    let pathRegister = path.join(process.cwd(), '/views/register.html');
    res.sendFile(pathRegister);
});*/

router.get('/register', mainController.register);

/*router.get('/login', (req, res)=>{
    let pathLogin = path.join(process.cwd(), '/views/login.html');
    res.sendFile(pathLogin);
});*/

router.get('/login', mainController.login);

module.exports = router;