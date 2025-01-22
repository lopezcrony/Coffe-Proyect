const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');


const DetalleMetodoPago = sequelize.define('DetalleMetodoPago', {
    idDetallePago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ventas',
        key: 'idVenta'
      }
    },
    idMetodoPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MetodoPagos',
        key: 'idMetodoPago'
      }
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },

    
  },{tableName: 'DetalleMetodosPago',
    timestamps: false});

  DetalleMetodoPago.associate = (models) => {
    DetalleMetodoPago.belongsTo(models.Venta, {
        foreignKey: 'idVenta',
        as: 'venta'
    });
    DetalleMetodoPago.belongsTo(models.MetodoPago, {
        foreignKey: 'idMetodoPago',
        as: 'metodoPago'
    });
};

module.exports = DetalleMetodoPago;