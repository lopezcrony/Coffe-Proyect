const productoCaracteristicaRepository = require('../repository/attributesProduct.repository');

const getAllProductoCaracteristicas = async () => {
    try {
        return await productoCaracteristicaRepository.getAllProductoCaracteristicas();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getOneProductoCaracteristica = async (idProducto, idCaracteristica) => {
    try {
        return await productoCaracteristicaRepository.getOneProductoCaracteristica(idProducto, idCaracteristica);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const addProductoCaracteristica = async (productoCaracteristicaData, options = {}) => {
    try {
        return await productoCaracteristicaRepository.addProductoCaracteristica(productoCaracteristicaData, options);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const deleteOneProductoCaracteristica = async (idProducto, idCaracteristica) => {
    try {
        return await productoCaracteristicaRepository.deleteOneProductoCaracteristica(idProducto, idCaracteristica);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllProductoCaracteristicas,
    getOneProductoCaracteristica,
    addProductoCaracteristica,
    deleteOneProductoCaracteristica
};
