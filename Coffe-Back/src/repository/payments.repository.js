const Pago = require('../models/payments');
const DetallePago = require('../models/paymentsDetail');

const getAllPagos = async () => {
    try {
        return await Pago.findAll({
            include: [{ model: DetallePago, as: 'detalles' }]
        });
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getPagoById = async (idPago) => {
    try {
        return await Pago.findByPk(idPago, {
            include: [{ model: DetallePago, as: 'detalles' }]
        });
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getPagosByProveedor = async (idProveedor) => {
    try {
        return await Pago.findAll({
            where: { idProveedor },
            include: [{ model: DetallePago, as: 'detalles' }]
        });
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const addPago = async (pagoData, options = {}) => {
    try {
        return await Pago.create(pagoData, options);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const deletePago = async (idPago) => {
    try {
        const result = await Pago.destroy({
            where: {
                idPago
            }
        });
        return result;
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

module.exports = {
    getAllPagos,
    getPagoById,
    getPagosByProveedor,
    addPago,
    deletePago
};
