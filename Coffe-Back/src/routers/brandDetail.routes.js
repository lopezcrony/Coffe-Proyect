const { Router } = require("express");
const detalleMarcaController = require("../controllers/brandDetail.controller");
const { authenticateJWT } = require('../middleware/auth.validation');
const {detalleMarcaValidationRules} = require('../middleware/brandDetail.validations')

const router = Router();

router
    .get('/', detalleMarcaController.getAllDetalleMarcas) // Obtener todos los detalles de marca
    .get('/marca/:idMarca/proveedor/:idProveedor', detalleMarcaController.getOneDetalleMarca) // Obtener un detalle específico
    .post('/', authenticateJWT,detalleMarcaValidationRules, detalleMarcaController.addMarcaToProveedor) // Agregar un detalle de marca
    .delete('/marca/:idMarca/proveedor/:idProveedor', detalleMarcaValidationRules, authenticateJWT, detalleMarcaController.deleteOneDetalleMarca); // Eliminar un detalle de marca

module.exports = router;
