const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const MetodoPago = sequelize.define('MetodoPago', {
    idMetodoPago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    metodo: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    estadoMetodo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    
  },{tableName: 'MetodoPagos',
    timestamps: false});

  MetodoPago.associate = (models) => {
    MetodoPago.hasMany(models.DetalleMetodoPago, {
        foreignKey: 'idMetodoPago',
        as: 'detalleMetodosPago'
    });
};

module.exports = MetodoPago;