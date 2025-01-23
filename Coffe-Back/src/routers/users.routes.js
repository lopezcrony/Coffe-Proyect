const { Router } = require("express");
const userController = require("../controllers/users.controller");
const { validateCreateUser, validateUpdateUser } = require('../middleware/users.validations');

const { } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getOneUser)
    .post('/', validateCreateUser,  userController.createNewUser)
    .put('/:id', validateUpdateUser,   userController.updateOneUser)
    .patch('/:id',  userController.updateUserStatus)
    .delete('/:id',   userController.deleteOneUser); // Para protejer el metodo agrego lo siguiente: authenticateJWT

module.exports = router;