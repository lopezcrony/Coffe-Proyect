const { Router } = require("express");
const salesController = require("../controllers/sales.controller");
// const { validateSaleWithDetails } = require("../middleware/sales.validations")

const { } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', salesController.GetAllSales)
    .get('/:id', salesController.GetOneSale)
    .post('/',  salesController.CreateNewSale)
    .patch('/:id',  salesController.cancelSale) 
    .delete('/:id', salesController.deleteSale)   
    
module.exports = router;
