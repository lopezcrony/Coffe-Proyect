const brandRepository = require('../repository/brands.repository');

const getAllBrands = async () => {
    try {
        return await brandRepository.findAllBrands();
    } catch (error) {
        throw error;
    }
};

const getOneBrand = async (id) => {
    try {
        if(!brandRepository.findBrandById(id)){
            throw new Error('No se encontró la marca');
        }
        return await brandRepository.findBrandById(id);
    } catch (error) {
        throw error;
    }
};

const createBrand = async (BrandData) => {
    try {
        return await brandRepository.createBrand(BrandData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un producto con ese nombre.');
        }
        throw error;
    }
};

const updateBrand = async (id, BrandData) => {
    try {
        if(!brandRepository.findBrandById(id)){
            throw new Error('No se encontró la marca');
        }
        return await brandRepository.updateBrand(id, BrandData);
    } catch (error) {
        if (error.message.includes('nombreMarca')) {
            throw new Error('Ya existe una marca con ese nombre.');
        }
        throw error;
    }
};

const updateBrandStatus = async (id, status) => {
    try {
        const result = await brandRepository.updateBrandStatus(id, status);
        if (result === 0) {
            throw new Error('Marca no encontrada');
        }
        return result;
    } catch (error) {
        throw new Error('Error al cambiar el estado de la marca: ' + error.message);
    }
};

const deleteOneBrand = async (id) => {
    try {
        const result = await brandRepository.deleteBrand(id);
        if (result === 0) {
            throw new Error('Marca no encontrada');
        }
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllBrands,
    getOneBrand,
    createBrand,
    updateBrand,
    updateBrandStatus,
    deleteOneBrand,
};
