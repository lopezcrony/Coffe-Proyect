const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Proveedor = sequelize.define('Proveedor', {
    idProveedor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nitProveedor: {
      type: DataTypes.STRING(9),
      allowNull: true,
      validate: {
        is: /^[0-9]+$/
      }
    },
    nombreProveedor: {
      type: DataTypes.STRING(50),
      unique: false,
      allowNull: false,
      validate: {
        is: /^[a-zA-Záéíóúñ ]+$/
      }
    },
    direccionProveedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefonoProveedor: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        is: /^[0-9]{7,10}$/
      }
    },
    nombreBanco: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-zA-Záéíóúñ ]+$/
      }
    },
    numeroCuenta: {
      type: DataTypes.STRING(11),
      allowNull: false,
      validate: {
        is: /^[0-9]{11}$/
      }
    },
    estadoProveedor: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
}, {
    tableName: 'proveedores',
    timestamps: false
});

Proveedor.associate = (models) => {
    Proveedor.belongsToMany(models.Marca, { through: models.DetalleMarca, foreignKey: 'idProveedor' });
    Proveedor.hasMany(models.Compra, { foreignKey: 'idProveedor' });
    Proveedor.hasMany(models.Pago, { foreignKey: 'idProveedor' });
};

module.exports = Proveedor;
