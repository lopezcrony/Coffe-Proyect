const Attributes = require('../models/Attributes.model');


const findAllAttributes = async () => {
    return await Attributes.findAll();
};

const findAttributeById = async (id) => {
    return await Attributes.findByPk(id);
};

const createAttribute = async (AttributeData) => {
    return await Attributes.create(AttributeData);
};

const updateAttribute = async (id, AttributeData) => {
    const Attribute = await findAttributeById(id);
    if (Attribute) {
        return await Attribute.update(AttributeData);
    }
    throw new Error('Atributo no encontrado');
};

const updateAttributeStatus = async (id, status) => {

    const Attribute = await findAttributeById(id);
    if (Attribute) {
        return await Attribute.update({estadoCaracteristica : status});
    }
    throw new Error('REPOSITORY: Atributo no encontrada');
};

const deleteAttribute = async (id) => {
    const result = await Attributes.destroy({
        where: { 	idCategoria: id }
    });
    return result;
};


module.exports = {
    findAllAttributes,
    findAttributeById,
    createAttribute,
    updateAttribute,
    updateAttributeStatus,
    deleteAttribute
};
