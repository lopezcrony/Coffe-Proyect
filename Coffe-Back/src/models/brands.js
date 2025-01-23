const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Marca = sequelize.define('Marca', {
    idMarca: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombreMarca: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Záéíóúñ ]+$/
      }
    },
    descripcionMarca: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        is: /^[0-9a-zA-Záéíóúñ ]+$/
      }
    },
    imagenURL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    estadoMarca: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    
  },{tableName: 'Marca',
    timestamps: false});

  Marca.associate = (models) => {
    Marca.belongsToMany(models.Proveedor, { through: models.DetalleMarca, foreignKey: 'idMarca', as: 'proveedores' });
    Marca.hasMany(models.Producto, { foreignKey: 'idMarca', as: 'productos' });
  };
  
  module.exports = Marca;