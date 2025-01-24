const { Router } = require("express");
const shoppingController = require("../controllers/shoppings.controller");
const { validateShopping } = require("../middleware/shoppings.validations");

const { } = require('../middleware/auth.validation');


const router = Router();

router
    .get('/', shoppingController.getAllShoppings)
    .get('/:id', shoppingController.getOneShopping)
    .get('/proveedor/:id', shoppingController.getShoppingByProvider)
    .post('/', validateShopping, shoppingController.createShopping)
    .delete('/:id', shoppingController.deleteOneShopping)
    // .patch('/:id', shoppingController.updateShoppingStatus)
    .put('/:id',  shoppingController.cancelShopping)

module.exports = router;
