const { Router } = require("express");
const salesController = require("../controllers/sales.controller");
// const { validateSaleWithDetails } = require("../middleware/sales.validations")

const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', salesController.GetAllSales)
    .get('/:id', salesController.GetOneSale)
    .post('/', authenticateJWT, salesController.CreateNewSale)
    .patch('/:id', authenticateJWT, salesController.cancelSale) 
    .delete('/:id', salesController.deleteSale)   
    
module.exports = router;
