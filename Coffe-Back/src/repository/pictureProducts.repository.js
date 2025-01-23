const ImagenProducto = require('../models/pictureProduct');

const getAllImagenesProducto = async () => {
    try {
        return await ImagenProducto.findAll();
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getOneImagenProducto = async (idImagen) => {
    try {
        return await ImagenProducto.findByPk(idImagen);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const addImagenProducto = async (imagenProductoData, options = {}) => {
    try {
        return await ImagenProducto.create(imagenProductoData, options);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const deleteOneImagenProducto = async (idImagen) => {
    try {
        const result = await ImagenProducto.destroy({
            where: {
                idImagen
            }
        });
        return result;
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

module.exports = {
    getAllImagenesProducto,
    getOneImagenProducto,
    addImagenProducto,
    deleteOneImagenProducto
};
