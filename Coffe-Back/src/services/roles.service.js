const Roles = require('../models/roles');

const getAllRoles = async () => {
  try {
    return await Roles.findAll();
  } catch (error) {
    throw error;
  }
};

const getOneRole = async (id) => {
  try {
    return await Roles.findByPk(id);
  } catch (error) {
    throw error;
  }
};

const createNewRole = async (rolData, permissions) => {
  try {
    const newRole = await Roles.create(rolData);
    return await getOneRole(newRole.idRol);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new Error('Ya existe rol con ese nombre.');
    }
    throw error;
  }
};

const updateRole = async (id, rolData) => {
  try {
    const role = await Roles.findByPk(id);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    
    await role.update(rolData);
    
    return await getOneRole(id);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new Error('Ya existe ese rol.');
    }
    throw error;
  }
};

const updateRoleStatus = async (id, status) => {
  try {
    const role = await Roles.findByPk(id);
    if (!role) {
      throw new Error('El rol no se pudo encontrar');
    }
    await role.update({ estadoRol: status });
    return role;
  } catch (error) {
    throw new Error('Error al cambiar el estado del rol: ' + error.message);
  }
};

const deleteOneRole = async (id) => {
  try {
    const role = await Roles.findByPk(id);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    await role.destroy();
    return { message: 'Rol eliminado con éxito' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRoles,
  getOneRole,
  createNewRole,
  updateRole,
  updateRoleStatus,
  deleteOneRole
};