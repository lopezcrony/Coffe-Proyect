const { Router } = require("express");
const providerController = require("../controllers/providers.controller");
const { validateProvider } = require('../middleware/providers.validations')

// const { authenticateJWT } = require('../middlewares/auth.middleware');

const router = Router();

router
    .get('/', providerController.getAllProviders)
    .get('/:id', providerController.getOneProvider)
    .post('/', validateProvider,providerController.createProvider)
    .put('/:id', validateProvider,  providerController.updateProvider)
    .patch('/:id',  providerController.updateProviderStatus)
    .delete('/:id', providerController.deleteOneProvider)


module.exports = router;
