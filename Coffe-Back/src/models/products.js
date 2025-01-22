const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Producto = sequelize.define('Producto', {
    idProducto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marca',
        key: 'idMarca'
      }
    },
    nombreProducto: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Záéíóúñ ]+$/
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    precioVenta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    estadoProducto: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    
  },{tableName: 'productos',
    timestamps: false});

  Producto.associate = (models) => {
    Producto.belongsTo(models.Marca, { foreignKey: 'idMarca' });
    Producto.hasMany(models.ImagenProducto, { foreignKey: 'idProducto' });
    Producto.belongsToMany(models.Caracteristica, { through: models.ProductoCaracteristica, foreignKey: 'idProducto' });
    Producto.hasMany(models.DetalleCompra, { foreignKey: 'idProducto' });
    Producto.hasMany(models.Ajuste, { foreignKey: 'idProducto' });
    Producto.hasMany(models.DetalleVenta, { foreignKey: 'idProducto' });
  };
  
  module.exports = Producto