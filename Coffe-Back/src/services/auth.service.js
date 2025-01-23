const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userRepository = require('../repository/users.repository');

const SECRET_KEY = process.env.JWT_SECRET;

const loginUser = async (correoUsuario, claveUsuario) => {
  const user = await userRepository.findUserByEmail(correoUsuario);
  
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  if (!user.estadoUsuario) {
    throw new Error("Cuenta desactivada. Contacte al administrador.");
  }

  const freshUser = await userRepository.findUserById(user.idUsuario);
  
  const isPasswordValid = await bcrypt.compare(claveUsuario, freshUser.claveUsuario);

  if (!isPasswordValid) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    {
      idUsuario: user.idUsuario,
      idRol: user.idRol,
      correoUsuario: user.correoUsuario,
    },
    SECRET_KEY,
    { expiresIn: "10h" }
  );

  return {
    success: true,
    message: "Inicio de sesión exitoso",
    token,
    user: {
      idUsuario: user.idUsuario,
      nombreUsuario: user.nombreUsuario,
      apellidoUsuario: user.apellidoUsuario,
      correoUsuario: user.correoUsuario,
      idRol: user.idRol,
    },
  };
};

module.exports = {
  loginUser,
};