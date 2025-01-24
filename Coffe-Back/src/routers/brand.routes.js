const { Router } = require("express");
const brandController = require("../controllers/brand.controller");
const { validateProvider } = require('../middleware/brand.validations')

const { } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', brandController.getAllBrands)
    .get('/:id', brandController.getOneBrand)
    .post('/', brandController.createBrand)
    .put('/:id',    brandController.updateBrand)
    .patch('/:id',  brandController.updateBrandStatus)
    .delete('/:id', brandController.deleteOneBrand)


module.exports = router;
