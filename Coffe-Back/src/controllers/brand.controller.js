const brandService = require('../services/brand.service');

const getAllBrands = async (req, res) => {
    try {
        const Brands = await brandService.getAllBrands();
        res.status(200).json(Brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneBrand = async (req, res) => {
    try {
        const Brand = await brandService.getOneBrand(req.params.id);
        res.status(200).json(Brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBrand = async (req, res) => {
    try {
        const newBrand = await brandService.createBrand(req.body);
        res.status(201).json({ message: 'Marca agregada exitosamente.', newBrand });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBrand = async (req, res) => {
    try {
        const updatedBrand = await brandService.updateBrand(req.params.id, req.body);
        res.status(200).json({ message: 'Marca actualizada exitosamente', updatedBrand });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

const updateBrandStatus = async (req, res) => {
    try {
        let { estadoMarca } = req.body;

        if (estadoMarca === '0' || estadoMarca === 0) {
            estadoMarca = false;
        } else if (estadoMarca === '1' || estadoMarca === 1) {
            estadoMarca = true;
        } else if (estadoMarca === true || estadoMarca === false) {

        } else {
            return res.status(400).json({ message: 'El estado debe ser un valor booleano' });
        }

        await brandService.updateBrandStatus(req.params.id, estadoMarca);
        res.json({ message: 'Estado actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneBrand = async (req, res) => {
    try {
        await brandService.deleteOneBrand(req.params.id);
        res.json({ message: 'Marca eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllBrands,
    getOneBrand,
    createBrand,
    updateBrand,
    updateBrandStatus,
    deleteOneBrand
};
