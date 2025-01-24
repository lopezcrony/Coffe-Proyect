const ajusteRepository = require('../repository/adjustments.repository');

const getAllAjustes = async () => {
    try {
        return await ajusteRepository.getAllAjustes();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getOneAjuste = async (idAjuste) => {
    try {
        return await ajusteRepository.getOneAjuste(idAjuste);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const addAjuste = async (ajusteData, options = {}) => {
    try {
        return await ajusteRepository.addAjuste(ajusteData, options);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const deleteOneAjuste = async (idAjuste) => {
    try {
        return await ajusteRepository.deleteOneAjuste(idAjuste);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllAjustes,
    getOneAjuste,
    addAjuste,
    deleteOneAjuste
};
