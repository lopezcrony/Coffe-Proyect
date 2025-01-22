const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Pago = sequelize.define('Pago', {
    idPago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Proveedores',
        key: 'idProveedor'
      }
    },
    totalPago: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

   
  }, {tableName: 'pagos',
    timestamps: false});

  Pago.associate = (models) => {
    Pago.belongsTo(models.Proveedor, { foreignKey: 'idProveedor', as: 'proveedor' });
    Pago.hasMany(models.DetallePago, { foreignKey: 'idPago', as: 'detalles' });
  };
  
  module.exports = Pago