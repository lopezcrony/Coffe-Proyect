const { Router } = require("express");
const productoCaracteristicaController = require("../controllers/attributeProduct.controller");
const { validateProductoCaracteristica } = require("../middleware/attributeProduct.validation");
const { } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', productoCaracteristicaController.getAllProductoCaracteristicas)
    .get('/producto/:idProducto/caracteristica/:idCaracteristica', productoCaracteristicaController.getOneProductoCaracteristica)
    .post('/', validateProductoCaracteristica,  productoCaracteristicaController.addProductoCaracteristica)
    .delete('/producto/:idProducto/caracteristica/:idCaracteristica',  productoCaracteristicaController.deleteOneProductoCaracteristica);

module.exports = router;
