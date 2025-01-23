const { Router } = require("express");
const attributeController = require("../controllers/attribute.controller");
const {validateCaracteristica } = require("../middleware/attributes.validations");

const { } = require('../middleware/auth.validation');


const router = Router();

router
    .get('/', attributeController.getAllAttributes)
    .get('/:id', attributeController.getOneAttribute)
    .post('/', validateCaracteristica, attributeController.createAttribute)
    .put('/:id', validateCaracteristica, attributeController.updateAttribute)
    .patch('/:id',attributeController.updateAttributeStatus)

module.exports = router;
