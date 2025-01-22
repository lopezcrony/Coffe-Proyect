const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const DetalleCompra = sequelize.define('DetalleCompra', {
    idDetalleCompra: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idCompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Compras',
        key: 'idCompra'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'idProducto'
      }
    },
    cantidadProducto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precioCompraUnidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    
  },{tableName: 'detalleCompra',
    timestamps: false});


  DetalleCompra.associate = (models) => {
    DetalleCompra.belongsTo(models.Compra, { foreignKey: 'idCompra', as: 'compra' });
    DetalleCompra.belongsTo(models.Producto, { foreignKey: 'idProducto', as: 'producto' });
  };
  
  module.exports = DetalleCompra;