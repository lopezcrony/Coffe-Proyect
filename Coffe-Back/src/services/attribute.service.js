const attributeRepository = require('../repository/attributes.repository');

const getAllAttributes = async () => {
    try {
        return await attributeRepository.findAllAttributes();
    } catch (error) {
        throw error;
    }
};

const getOneAttribute = async (id) => {
    try {
        return await attributeRepository.findAttributeById(id);
    } catch (error) {
        throw error;
    }
};

const createAttribute = async (AttributeData) => {
    try {
        return await attributeRepository.createAttribute(AttributeData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un atributo con ese nombre.');
        }
        throw error;
    }
};

const updateAttribute = async (id, AttributeData) => {
    try {
        const result = await attributeRepository.updateAttribute(id, AttributeData);
        if (!result) {
            throw new Error('SERVICE: No se pudo actualizar la información del atributo.');
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('La atributo ya esta registrado.');
        }
        throw error;
    }
};

const updateAttributeStatus  = async (id, status) => {
    try {
        const result = await attributeRepository.updateAttributeStatus(id, status);
        if (!result) {
            throw new Error('SERVICE: No se pudo actualizar el estado del atributo');
        }
        return result;
    } catch (error) {
        throw new Error('SERVICE: Error al cambiar el estado del atributo: ' + error.message);
    }
}


module.exports = {
    getAllAttributes,
    getOneAttribute,
    createAttribute,
    updateAttribute,
    updateAttributeStatus
};
