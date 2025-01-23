const DetalleMarca = require('../models/brandDetails');

const getAllDetalleMarcas = async () => {
    try {
        return await DetalleMarca.findAll();
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const getOneDetalleMarca = async (idMarca, idProveedor) => {
    try {
        return await DetalleMarca.findOne({
            where: {
                idMarca,
                idProveedor
            }
        });
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const addMarcaToProveedor = async (detalleMarcaData, options = {}) => {
    try {
        return await DetalleMarca.create(detalleMarcaData, options);
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

const deleteOneDetalleMarca = async (idMarca, idProveedor) => {
    try {
        const result = await DetalleMarca.destroy({
            where: {
                idMarca,
                idProveedor
            }
        });
        return result;
    } catch (error) {
        throw new Error('REPOSITORY: ' + error.message);
    }
};

module.exports = {
    getAllDetalleMarcas,
    getOneDetalleMarca,
    addMarcaToProveedor,
    deleteOneDetalleMarca
};
