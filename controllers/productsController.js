const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function buscarProductoPorId(id, productos){
    const productoBuscado = productos.find((producto) => producto.id === id);
    return productoBuscado;
}

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products/products', {products: products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let {id} = req.params;
		id = Number(id);
		const productoBuscado = buscarProductoPorId(id, products);
		res.render('products/detail', {product: productoBuscado});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products/product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		res.send('Creando un producto');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let {id} = req.params;
		id = Number(id);
		const productoBuscado = buscarProductoPorId(id, products);
		res.render('products/product-edit-form', {productToEdit: productoBuscado});
		//res.send('Estamos editando el producto ' + id);
	},
	// Update - Method to update
	update: (req, res) => {
		let {id} = req.params;
		id = Number(id);
		res.send('Actualizando producto: ' + id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let {id} = req.params;
		id = Number(id);
		res.send('Eliminando producto: ' + id);
	}
};

module.exports = controller;