const Roles = require('../models/roles');

const findAllRoles = async () => {
  return await Roles.findAll();
};

const findRoleById = async (id) => {
  return await Roles.findByPk(id);
};

const createRole = async (roleData) => {
  return await Roles.create(roleData);
};

const updateRole = async (id, roleData) => {
  const [updatedRows] = await Roles.update(roleData, { where: { idRol: id } });
  if (updatedRows > 0) {
    return await findRoleById(id);
  }
  return null;
};

const deleteRole = async (id) => {
  return await Roles.destroy({ where: { idRol: id } });
};

const updateRoleStatus = async (id, status) => {
  return await Roles.update({ estadoRol: status }, { where: { idRol: id } });
};

module.exports = {
  findAllRoles,
  findRoleById,
  createRole,
  updateRole,
  deleteRole,
  updateRoleStatus
};