const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const DetalleMarca = sequelize.define('DetalleMarca', {
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marca',
        key: 'idMarca'
      }
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Proveedores',
        key: 'idProveedor'
      }
    },

   
  }, { tableName: 'detallesMarca',
    timestamps: false},{
    primaryKey: ['idMarca', 'idProveedor']
  });

  DetalleMarca.associate = (models) => {
    DetalleMarca.belongsTo(models.Proveedor, { foreignKey: 'idProveedor', as: 'Proveedor' });
    DetalleMarca.belongsTo(models.Marca, { foreignKey: 'idMarca', as: 'Marca' });
  };
  
  module.exports = DetalleMarca;