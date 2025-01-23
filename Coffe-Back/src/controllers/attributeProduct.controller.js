const productoCaracteristicaService = require('../services/attributeProduct.service');

const getAllProductoCaracteristicas = async (req, res) => {
    try {
        const productoCaracteristicas = await productoCaracteristicaService.getAllProductoCaracteristicas();
        res.status(200).json(productoCaracteristicas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneProductoCaracteristica = async (req, res) => {
    try {
        const productoCaracteristica = await productoCaracteristicaService.getOneProductoCaracteristica(req.params.idProducto, req.params.idCaracteristica);
        if (!productoCaracteristica) {
            return res.status(404).json({ message: 'Característica de producto no encontrada.' });
        }
        res.status(200).json(productoCaracteristica);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addProductoCaracteristica = async (req, res) => {
    try {
        const newProductoCaracteristica = await productoCaracteristicaService.addProductoCaracteristica(req.body);
        res.status(201).json({ message: 'Característica de producto agregada exitosamente.', newProductoCaracteristica });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneProductoCaracteristica = async (req, res) => {
    try {
        const result = await productoCaracteristicaService.deleteOneProductoCaracteristica(req.params.idProducto, req.params.idCaracteristica);
        if (!result) {
            return res.status(404).json({ message: 'Característica de producto no encontrada.' });
        }
        res.json({ message: 'Característica de producto eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProductoCaracteristicas,
    getOneProductoCaracteristica,
    addProductoCaracteristica,
    deleteOneProductoCaracteristica
};
