const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function buscarProductoPorId(id, productos){
    const productoBuscado = productos.find((producto) => producto.id === id);
    return productoBuscado;
}

function buscarIndiceProducto(id, productos){
	const indice = productos.findIndex((producto) => producto.id === id);
	return indice;
}

function wasFileSend(file){
	if(!file){
		return false;
	} else{
		return true;
	}
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
		//res.send('Creando un producto');

		//console.log(req.file);
		const wasSend = wasFileSend(req.file);
		const image = wasSend ? req.file.filename : "";

		const newProduct = {
			"id": products.length + 1,
  			"name": req.body.name,
  			"price": req.body.price,
  			"discount": req.body.discount,
  			"category": req.body.category,
  			"description": req.body.description,
  			"image": image
		}
		products.push(newProduct);
		const convertidoAString = JSON.stringify(products);

		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), convertidoAString);
		//fs.writeFileSync('productsDataBase.json', newProduct);
		res.redirect('/products/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let {id} = req.params;
		id = Number(id);
		const productoBuscado = buscarProductoPorId(id, products);
		res.render('products/product-edit-form', {productToEdit: productoBuscado});
		//res.send('Estamos editando el producto ' + id);

		//==================================
		
	},
	// Update - Method to update
	update: (req, res) => {
		let {id} = req.params;
		id = Number(id);
		//res.send('Actualizando producto: ' + id);

		//================================
		const productoBuscado = buscarProductoPorId(id, products);
		const indice = buscarIndiceProducto(id, products);
		
		const {name, price, discount, category, description} = req.body;

		fs.unlink(path.join(process.cwd(), 'public/images/products/', productoBuscado.image), 
		(err) => {
			if (err) {
				throw err;
			}
			console.log("Archivo eliminado correctamente")
		});

		const wasSend = wasFileSend(req.file);
		const image = wasSend ? req.file.filename : "";

		productoBuscado.name = name;
		productoBuscado.price = price;
		productoBuscado.discount = discount;
		productoBuscado.category = category;
		productoBuscado.description = description;
		productoBuscado.image = image;

		products[indice] = productoBuscado;
		const convertidoAString = JSON.stringify(products);

		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), convertidoAString);

		res.redirect('/products/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let {id} = req.params;
		id = Number(id);
		//res.send('Eliminando producto: ' + id);

		//=====================================
		const productoPorEliminar = buscarProductoPorId(id,products);

		fs.unlink(path.join(process.cwd(), 'public/images/products/', productoPorEliminar.image), 
		(err) => {
			if (err) {
				throw err;
			}
			console.log("Archivo eliminado correctamente")
		});


		const productosNoEliminados = products.filter((product) => product.id !== id);
		const convertidoAString = JSON.stringify(productosNoEliminados);

		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), convertidoAString);
		res.redirect('/products/');
	}
};

module.exports = controller;