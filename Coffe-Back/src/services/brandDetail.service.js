const detalleMarcaRepository = require('../repository/brandDetail.repository');

const getAllDetalleMarcas = async () => {
    try {
        return await detalleMarcaRepository.getAllDetalleMarcas();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getOneDetalleMarca = async (idMarca, idProveedor) => {
    try {
        return await detalleMarcaRepository.getOneDetalleMarca(idMarca, idProveedor);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const addMarcaToProveedor = async (detalleMarcaData, options = {}) => {
    try {
        return await detalleMarcaRepository.addMarcaToProveedor(detalleMarcaData, options);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const deleteOneDetalleMarca = async (idMarca, idProveedor) => {
    try {
        return await detalleMarcaRepository.deleteOneDetalleMarca(idMarca, idProveedor);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllDetalleMarcas,
    getOneDetalleMarca,
    addMarcaToProveedor,
    deleteOneDetalleMarca
};
