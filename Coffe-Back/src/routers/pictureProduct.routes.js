const { Router } = require("express");
const imagenProductoController = require("../controllers/pictureProducts.controller");
const { validateImagenProducto } = require("../middleware/pictureProducts.validations");
const {} = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', imagenProductoController.getAllImagenesProducto)
    .get('/:idImagen', imagenProductoController.getOneImagenProducto)
    .post('/', validateImagenProducto, imagenProductoController.addImagenProducto)
    .delete('/:idImagen', imagenProductoController.deleteOneImagenProducto);

module.exports = router;
