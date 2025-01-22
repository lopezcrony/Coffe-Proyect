const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Roles = sequelize.define('roles', {
  idRol: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nombreRol: {
    type: DataTypes.STRING(100),
    unique: {
      name: 'unique_nombreRol',
      msg: 'El nombre del rol debe ser único.'
    },
    allowNull: false
  },
  estadoRol: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  defaultScope: {
    order: [['idRol', 'DESC']]
  },
  tableName: 'roles',
  timestamps: false
});

Roles.associate = (models) => {
  Rol.hasMany(models.Usuario, { foreignKey: 'idRol', as: 'usuarios' });
};

module.exports = Roles;

