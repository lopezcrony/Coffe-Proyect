const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Venta = sequelize.define('Venta', {
    idVenta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fechaVenta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalVenta: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    estadoVenta: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    
  },{tableName: 'ventas',
    timestamps: false});


  Venta.associate = (models) => {
    Venta.hasMany(models.DetallePago, { foreignKey: 'idVenta', as: 'detallesPago' });
    Venta.hasMany(models.DetalleVenta, { foreignKey: 'idVenta', as: 'detallesVenta' });
  };
  
  module.exports = Venta;