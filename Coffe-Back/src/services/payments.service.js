const pagoRepository = require('../repository/payments.repository');

const getAllPagos = async () => {
    try {
        return await pagoRepository.getAllPagos();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getPagoById = async (idPago) => {
    try {
        return await pagoRepository.getPagoById(idPago);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getPagosByProveedor = async (idProveedor) => {
    try {
        return await pagoRepository.getPagosByProveedor(idProveedor);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const addPago = async (pagoData) => {
    try {
        return await pagoRepository.addPago(pagoData);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const deletePago = async (idPago) => {
    try {
        return await pagoRepository.deletePago(idPago);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllPagos,
    getPagoById,
    getPagosByProveedor,
    addPago,
    deletePago
};
