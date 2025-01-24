const brandRepository = require('../repository/brands.repository');
const detalleMarcaRepository = require('../repository/brandDetail.repository'); // Asegúrate de tener el repositorio del detalle de la marca
const {sequelize} = require('../config/dataBase')

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

const createBrand = async (brandData, detalleMarcaData) => {
    const transaction = await sequelize.transaction();
    try {
        // Crear la marca
        const newBrand = await brandRepository.createBrand(brandData, { transaction });

        // Crear el detalle de la marca
        const newDetalleMarca = await detalleMarcaRepository.addMarcaToProveedor({
            idMarca: newBrand.idMarca,
            ...detalleMarcaData
        }, { transaction });

        await transaction.commit();
        return { newBrand, newDetalleMarca };
    } catch (error) {
        await transaction.rollback();
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una marca con ese nombre.');
        }
        throw new Error('SERVICE: ' + error.message);
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
