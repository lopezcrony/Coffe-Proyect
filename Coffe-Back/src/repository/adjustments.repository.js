const Ajuste = require('../models/adjustments');

const getAllAjustes = async () => {
    try {
        return await Ajuste.findAll();
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getOneAjuste = async (idAjuste) => {
    try {
        return await Ajuste.findByPk(idAjuste);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const addAjuste = async (ajusteData, options = {}) => {
    try {
        return await Ajuste.create(ajusteData, options);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const deleteOneAjuste = async (idAjuste) => {
    try {
        const result = await Ajuste.destroy({
            where: {
                idAjuste
            }
        });
        return result;
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

module.exports = {
    getAllAjustes,
    getOneAjuste,
    addAjuste,
    deleteOneAjuste
};
