const { Router } = require("express");
const { validateRoles } = require('../middleware/roles.validations');
const rolesController = require("../controllers/roles.controller");

const { authenticateJWT } = require('../middleware/auth.validation');

const router = Router();

router
    .get('/', authenticateJWT, rolesController.getAllRoles)
    .get('/:id', authenticateJWT, rolesController.getOneRole)
    .post('/', authenticateJWT, validateRoles, rolesController.createNewRole)
    .put('/:id', authenticateJWT, validateRoles,  rolesController.updateRole)
    .patch('/:id', authenticateJWT, rolesController.updateRoleStatus)
    .delete('/:id', authenticateJWT, rolesController.deleteOneRole)


module.exports = router;
