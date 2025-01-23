const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Ajuste = sequelize.define('Ajuste', {
    idAjuste: {
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
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idUsuario'
      }
    },
    motivoAjuste: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        is: /^[a-zA-Záéíóúñ ]+$/,
        notEmpty: true
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaDeBaja: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estadoAjuste: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
}, {
    tableName: 'Ajustes',
    timestamps: false
});

Ajuste.associate = (models) => {
    Ajuste.belongsTo(models.Producto, { foreignKey: 'idProducto', as: 'producto' });
    Ajuste.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
};

module.exports = Ajuste;
