const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dataBase");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuario = sequelize.define(
  "Usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "idRol",
      },
    },
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidoUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefonoUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoUsuario: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    claveUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estadoUsuario: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetTokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    defaultScope: {
      order: [["idUsuario", "DESC"]],
    },
    tableName: "usuarios",
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        if (user.claveUsuario) {
          user.claveUsuario = await bcrypt.hash(user.claveUsuario, 10);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed("claveUsuario") && !user.claveUsuario.startsWith('$2b$')) {
          user.claveUsuario = await bcrypt.hash(user.claveUsuario, 10);
        }
      },
    },
  }
);

// Método para validar la contraseña
Usuario.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.claveUsuario);
};

// Método para generar JWT
Usuario.prototype.generarJWT = function () {
  return jwt.sign({ idUsuario: this.idUsuario, idRol: this.idRol }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

Usuario.associate = (models) => {
  Usuario.belongsTo(models.Roles, { foreignKey: 'idRol', as: 'rol' });
};

module.exports = Usuario


