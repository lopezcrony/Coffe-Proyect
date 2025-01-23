const ProductoCaracteristica = require('../models/attrributesProduct');

const getAllProductoCaracteristicas = async () => {
    try {
        return await ProductoCaracteristica.findAll();
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getOneProductoCaracteristica = async (idProducto, idCaracteristica) => {
    try {
        return await ProductoCaracteristica.findOne({
            where: {
                idProducto,
                idCaracteristica
            }
        });
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const addProductoCaracteristica = async (productoCaracteristicaData, options = {}) => {
    try {
        return await ProductoCaracteristica.create(productoCaracteristicaData, options);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const deleteOneProductoCaracteristica = async (idProducto, idCaracteristica) => {
    try {
        const result = await ProductoCaracteristica.destroy({
            where: {
                idProducto,
                idCaracteristica
            }
        });
        return result;
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

module.exports = {
    getAllProductoCaracteristicas,
    getOneProductoCaracteristica,
    addProductoCaracteristica,
    deleteOneProductoCaracteristica
};
