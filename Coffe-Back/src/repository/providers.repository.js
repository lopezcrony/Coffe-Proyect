const Provider = require('../models/providers');

const findAllProviders = async () => {
    return await Provider.findAll();
};

const findProviderById = async (id) => {
    return await Provider.findByPk(id);
};

const createProvider = async (providerData) => {
    return await Provider.create(providerData);
};

const updateProvider = async (id, providerData) => {
    const provider = await findProviderById(id);
    if (provider) {
        return await provider.update(providerData);
    }
    throw new Error('Proveedor no encontrado');
};

const updateProviderStatus = async (id, status) => {

    const provider = await findProviderById(id);
    if (provider) {
        return await provider.update({estadoProveedor : status});
    }
    throw new Error('Proveedor no encontrado');
};


const deleteProvider = async (id) => {
    const result = await Provider.destroy({
        where: { idProveedor: id }
    });
    return result;
};

module.exports = {
    findAllProviders,
    findProviderById,
    createProvider,
    updateProvider,
    updateProviderStatus,
    deleteProvider,
};
