const imagenProductoRepository = require('../repository/pictureProducts.repository');

const getAllImagenesProducto = async () => {
    try {
        return await imagenProductoRepository.getAllImagenesProducto();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getOneImagenProducto = async (idImagen) => {
    try {
        return await imagenProductoRepository.getOneImagenProducto(idImagen);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const addImagenProducto = async (imagenProductoData, options = {}) => {
    try {
        return await imagenProductoRepository.addImagenProducto(imagenProductoData, options);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const deleteOneImagenProducto = async (idImagen) => {
    try {
        return await imagenProductoRepository.deleteOneImagenProducto(idImagen);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllImagenesProducto,
    getOneImagenProducto,
    addImagenProducto,
    deleteOneImagenProducto
};
