const { Router } = require("express");
const shoppingDetailsController = require("../controllers/shoppingsDetail.controller");

const router = Router();

router
    .get('/:idCompra', shoppingDetailsController.getAllShoppingDetailsByShopping)
    .get('/', shoppingDetailsController.getAllShoppingDetails)
    .get('/:id', shoppingDetailsController.getOneShoppingdetail)
    .put('/:id', shoppingDetailsController.updateShoppingdetail)
    .delete('/:id', shoppingDetailsController.deleteOneShoppingdetail)

module.exports = router;
