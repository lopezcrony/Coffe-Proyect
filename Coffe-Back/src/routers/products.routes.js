const { Router } = require("express");
const productsController = require("../controllers/products.controller");
const { validateProducts } = require("../middleware/products.validations");
const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', productsController.getAllProducts)
    .get('/:id', productsController.getOneProduct)
    .post('/', validateProducts, productsController.createProduct)
    .put('/:id', validateProducts, authenticateJWT, productsController.updateProduct)
    .patch('/:id', authenticateJWT, productsController.updateProductStatus)
    .delete('/:id', authenticateJWT, productsController.deleteOneProduct)

module.exports = router;
