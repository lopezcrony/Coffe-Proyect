const { Router } = require("express");
const userController = require("../controllers/users.controller");
const { validateCreateUser, validateUpdateUser } = require('../middleware/users.validations');

const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getOneUser)
    .post('/', validateCreateUser, authenticateJWT, userController.createNewUser)
    .put('/:id', validateUpdateUser, authenticateJWT,  userController.updateOneUser)
    .patch('/:id', authenticateJWT, userController.updateUserStatus)
    .delete('/:id', authenticateJWT,  userController.deleteOneUser); // Para protejer el metodo agrego lo siguiente: authenticateJWT

module.exports = router;