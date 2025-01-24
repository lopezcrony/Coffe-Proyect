const { Router } = require("express");
const ajusteController = require("../controllers/adjustments.controller");
const { validateAjuste } = require("../middleware/adjustments.validations");
const { } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', ajusteController.getAllAjustes)
    .get('/:idAjuste', ajusteController.getOneAjuste)
    .post('/', validateAjuste,  ajusteController.addAjuste)
    .delete('/:idAjuste',  ajusteController.deleteOneAjuste);

module.exports = router;
