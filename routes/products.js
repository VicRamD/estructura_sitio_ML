const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

// ************ Multer Storage ************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(process.cwd(),'public/images/products'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
  
const uploadFile = multer({storage});

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/', uploadFile.single('image'), productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
router.put('/:id', uploadFile.single('image'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

module.exports = router;
