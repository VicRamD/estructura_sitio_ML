const express = require('express');
const methodOverride =  require('method-override');
const path = require('path');
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products')

const server = express();
const pathPublic = path.join(__dirname, '/public');

//==============Middlewares==========================/
server.use(express.static(pathPublic));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

server.set('view engine', 'ejs');

const port = process.env.PORT || 3030

server.listen(port, () => {
    /*console.log(`Servidor corriendo en http://localhost:3030/`); */
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});

server.use('/', mainRoutes);
server.use('/products', productsRoutes);

