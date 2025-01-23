const { Router } = require("express");
const providerController = require("../controllers/providers.controller");
const { validateProvider } = require('../middleware/providers.validations')

const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', providerController.getAllProviders)
    .get('/:id', providerController.getOneProvider)
    .post('/', validateProvider, authenticateJWT, providerController.createProvider)
    .put('/:id', validateProvider, authenticateJWT,  providerController.updateProvider)
    .patch('/:id', authenticateJWT, providerController.updateProviderStatus)
    .delete('/:id', authenticateJWT,providerController.deleteOneProvider)


module.exports = router;
