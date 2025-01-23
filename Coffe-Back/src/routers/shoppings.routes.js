const { Router } = require("express");
const shoppingController = require("../controllers/shoppings.controller");
const { validateShopping } = require("../middleware/shoppings.validations");

const { authenticateJWT } = require('../middleware/auth.validation');


const router = Router();

router
    .get('/', shoppingController.getAllShoppings)
    .get('/:id', shoppingController.getOneShopping)
    .get('/proveedor/:id', shoppingController.getShoppingByProvider)
    .post('/', validateShopping, authenticateJWT,shoppingController.createShopping)
    .delete('/:id', shoppingController.deleteOneShopping)
    // .patch('/:id', shoppingController.updateShoppingStatus)
    .put('/:id', authenticateJWT, shoppingController.cancelShopping)

module.exports = router;
