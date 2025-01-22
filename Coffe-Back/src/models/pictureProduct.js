const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const ImagenProducto = sequelize.define('ImagenProducto', {
    idImagen: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'idProducto'
      }
    },
    imagenURL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    esObligatoria: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
}, {
    uniqueKeys: {
      uniqueTag: {
        customIndex: true,
        fields: ['idProducto', 'esObligatoria']
      }
    },
    tableName: 'imagenProductos',
    timestamps: false
});

ImagenProducto.associate = (models) => {
    ImagenProducto.belongsTo(models.Producto, { foreignKey: 'idProducto', as: 'producto' });
};

module.exports = ImagenProducto;
