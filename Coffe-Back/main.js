const { connectToDatabase, sequelize } = require('./src/config/dataBase');
const Server = require('./src/index');
const models = require('./src/models');

const startServer = async () => {
  try {
    // Conectar a la base de datos
    await connectToDatabase();

    // Sincronizar modelos
    models;
    // await sequelize.sync({ alter: true });

    // Crear e iniciar el servidor
    const server = new Server();
    await server.Initiate();

    return server.app; // Export the app for testing
  } catch (error) {
    console.error('No se pudo inicializar', error);
    process.exit(1);
  }
};

module.exports = startServer();