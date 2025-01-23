const imagenProductoService = require('../services/pictureProduct.service');

const getAllImagenesProducto = async (req, res) => {
    try {
        const imagenesProducto = await imagenProductoService.getAllImagenesProducto();
        res.status(200).json(imagenesProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneImagenProducto = async (req, res) => {
    try {
        const imagenProducto = await imagenProductoService.getOneImagenProducto(req.params.idImagen);
        if (!imagenProducto) {
            return res.status(404).json({ message: 'Imagen de producto no encontrada.' });
        }
        res.status(200).json(imagenProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addImagenProducto = async (req, res) => {
    try {
        const newImagenProducto = await imagenProductoService.addImagenProducto(req.body);
        res.status(201).json({ message: 'Imagen de producto agregada exitosamente.', newImagenProducto });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneImagenProducto = async (req, res) => {
    try {
        const result = await imagenProductoService.deleteOneImagenProducto(req.params.idImagen);
        if (!result) {
            return res.status(404).json({ message: 'Imagen de producto no encontrada.' });
        }
        res.json({ message: 'Imagen de producto eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllImagenesProducto,
    getOneImagenProducto,
    addImagenProducto,
    deleteOneImagenProducto
};
