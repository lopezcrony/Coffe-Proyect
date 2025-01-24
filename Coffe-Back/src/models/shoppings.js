const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Compra = sequelize.define('Compra', {
    idCompra: {
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
    valorCompra: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    estadoCompra: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    
  },{tableName: 'compras',
    timestamps: false});

  Compra.associate = (models) => {
    Compra.belongsTo(models.Proveedor, { foreignKey: 'idProveedor', as: 'proveedor' });
    Compra.hasMany(models.DetalleCompra, { foreignKey: 'idCompra', as: 'detalles' });
  };
  
  module.exports = Compra;