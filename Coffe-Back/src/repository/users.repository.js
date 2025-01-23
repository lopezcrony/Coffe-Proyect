const User = require("../models/users");
const { Op } = require("sequelize");

const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ["claveUsuario"] },
  });
};

const getOneUser = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ["claveUsuario"] },
  });
};

const createNewUser = async (user) => {
  return await User.create(user);
};

const updateOneUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return await user.update(userData);
};

const updateUserStatus = async (id, status) => {
  const user = await getOneUser(id);
  if (user) {
    return await user.update({ estadoUsuario: status });
  }
  throw new Error("Usuario no encontrado");
};

const deleteOneUser = async (id) => {
  return await User.destroy({
    where: { idUsuario: id },
  });
};

// Iniciar sesión

const findUserByEmail = async (correoUsuario) => {
  return User.findOne({ where: { correoUsuario } });
};

const findUserById = async (idUsuario) => {
  return User.findByPk(idUsuario);
};


module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  updateUserStatus,
  deleteOneUser,
  findUserByEmail,
  findUserById
};
