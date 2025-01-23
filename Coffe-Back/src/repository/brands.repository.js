const Brand = require('../models/brands');

const findAllBrands = async () => {
    return await Brand.findAll();
};

const findBrandById = async (id) => {
    return await Brand.findByPk(id);
};

const createBrand = async (BrandData) => {
    return await Brand.create(BrandData);
};

const updateBrand = async (id, BrandData) => {
    const Brand = await findBrandById(id);
    if (Brand) {
        return await Brand.update(BrandData);
    }
    throw new Error('Marca no encontrado');
};

const updateBrandStatus = async (id, status) => {

    const Brand = await findBrandById(id);
    if (Brand) {
        return await Brand.update({estadoMarca : status});
    }
    throw new Error('Marca no encontrado');
};


const deleteBrand = async (id) => {
    const result = await Brand.destroy({
        where: { idMarca: id }
    });
    return result;
};

module.exports = {
    findAllBrands,
    findBrandById,
    createBrand,
    updateBrand,
    updateBrandStatus,
    deleteBrand,
};
