const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const ProductoCaracteristica = sequelize.define('ProductoCaracteristica', {
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'idProducto'
      }
    },
    idCaracteristica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'caracteristicas',
        key: 'idCaracteristica'
      }
    },
    valorCaracteristica: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

  

  }, { tableName: 'productosCaranteristicas',
    timestamps: false}, {
    primaryKey: ['idProducto', 'idCaracteristica']
  });


ProductoCaracteristica.associate = (models) => {
    ProductoCaracteristica.belongsTo(models.Producto, { foreignKey: 'idProducto', as: 'producto' });
    ProductoCaracteristica.belongsTo(models.Caracteristica, { foreignKey: 'idCaracteristica', as: 'caracteristica' });
  };

  module.exports = ProductoCaracteristica;
  