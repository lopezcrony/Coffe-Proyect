const { Router } = require("express");
const { validateRoles } = require('../middleware/roles.validations');
const rolesController = require("../controllers/roles.controller");


const router = Router();

router
    .get('/',  rolesController.getAllRoles)
    .get('/:id',  rolesController.getOneRole)
    .post('/',  validateRoles, rolesController.createNewRole)
    .put('/:id',  validateRoles,  rolesController.updateRole)
    .patch('/:id',  rolesController.updateRoleStatus)
    .delete('/:id',  rolesController.deleteOneRole)


module.exports = router;
