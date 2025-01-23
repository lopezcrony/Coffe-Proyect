const { Router } = require("express");
const brandController = require("../controllers/brand.controller");
// const { validateProvider } = require('../middleware/brand.validations')

const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', brandController.getAllBrands)
    .get('/:id', brandController.getOneBrand)
    .post('/',  authenticateJWT, brandController.createBrand)
    .put('/:id',  authenticateJWT,  brandController.updateBrand)
    .patch('/:id', authenticateJWT, brandController.updateBrandStatus)
    .delete('/:id', authenticateJWT,brandController.deleteOneBrand)


module.exports = router;
