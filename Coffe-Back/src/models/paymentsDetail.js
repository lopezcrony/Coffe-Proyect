const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const DetallePago = sequelize.define('DetallePago', {
    idDetallePago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pagos',
        key: 'idPago'
      }
    },
    idVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ventas',
        key: 'idVenta'
      }
    },
    montoAcreditado: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    plazoMaximo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    
  },{tableName: 'detallesPagos',
    timestamps: false});

  DetallePago.associate = (models) => {
    DetallePago.belongsTo(models.Pago, { foreignKey: 'idPago' });
    DetallePago.belongsTo(models.Venta, { foreignKey: 'idVenta' });
    DetallePago.belongsTo(models.MetodoPago, { foreignKey: 'idMetodoPago' });
  };
  
  module.exports = DetallePago;