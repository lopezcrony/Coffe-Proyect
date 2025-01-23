const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dataBase');

const Caracteristica = sequelize.define('Caracteristica', {
    idCaracteristica: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombreCaracteristica: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },

    estadoCaracteristica:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
   
  }, {tableName: 'caracteristicas',
    timestamps: false});
  
  Caracteristica.associate = (models) => {
    Caracteristica.belongsToMany(models.Producto, {
        through: models.ProductoCaracteristica,
        foreignKey: 'idCaracteristica',
        as: 'productos'
    });
};

module.exports = Caracteristica;
