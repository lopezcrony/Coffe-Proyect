const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dataBase");

const DetalleVenta = sequelize.define('DetalleVenta', {
    idDetalleVenta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idVenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Ventas',
            key: 'idVenta'
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
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

   
},{ tableName: 'detalleVentas',
    timestamps: false});

DetalleVenta.associate = (models) => {
    DetalleVenta.belongsTo(models.Venta, {
        foreignKey: 'idVenta',
        as: 'venta'
    });
    DetalleVenta.belongsTo(models.Producto, {
        foreignKey: 'idProducto',
        as: 'producto'
    });
};

module.exports = DetalleVenta;