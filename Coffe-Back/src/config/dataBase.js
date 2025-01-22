const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Cargar el archivo .env adecuado según el entorno
const envPath = path.resolve(__dirname, `../../.env`);
dotenv.config({ path: envPath });

// Verificar que las variables de entorno se han cargado correctamente
if (!process.env.DIALECT) {
    throw new Error('DIALECT no está definido en el archivo de entorno.');
}

const sequelize = new Sequelize(
    process.env.NAME_DB, 
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT_DB,
        dialect: process.env.DIALECT,
        logging: false,
        dialectOptions: process.env.SSL_MODE === 'REQUIRED' ? {
            ssl: {
                require: true,
                rejectUnauthorized: true,
            },
            connectTimeout: 100000,
        } : {},
        define: {
            timestamps: false,
        },
    }
);

const createDatabaseIfNotExists = async () => {
    try {
        // Crea una conexión temporal a MySQL
        const tempSequelize = new Sequelize(
            `mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT_DB}`,
            { dialect: 'mysql', logging: false }
        );

        await tempSequelize.authenticate();

        await tempSequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.NAME_DB}`);

        // Cierra la conexión temporal
        await tempSequelize.close();
    } catch (error) {
        console.error('Error al conectar o crear la base de datos:', error.message);
    }
};

const connectToDatabase = async () => {
    try {
        await createDatabaseIfNotExists();
        await sequelize.authenticate();
        console.log(`\nConexión establecida a la base de datos "${process.env.NAME_DB}" puerto ${process.env.PORT_DB}.`);
    } catch (error) {
        console.error('Error de conexión completo:', error);
        console.error('Mensaje de error:', error.message);
        console.error('Código de error:', error.code);
        throw error;
    }
    return sequelize;
};

module.exports = { sequelize, connectToDatabase };
