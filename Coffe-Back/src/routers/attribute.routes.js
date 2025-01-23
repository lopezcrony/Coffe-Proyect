const { Router } = require("express");
const attributeController = require("../controllers/attribute.controller");
const { validateCategorie } = require("../middlewares/categories.validations");

const { } = require('../middleware/auth.validation');


const router = Router();

router
    .get('/', attributeController.getAllCategories)
    .get('/:id', attributeController.getOneCategorie)
    .post('/', validateCategorie, attributeController.createCategorie)
    .put('/:id', validateCategorie, attributeController.updateCategorie)
    .patch('/:id',attributeController.updateCategorieStatus)

module.exports = router;
