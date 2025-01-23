const attribueService = require('../services/attribute.service')

const getAllAttributes = async (req, res) => {
    try {
        const Attributes = await attribueService.getAllAttributes();
        res.status(200).json(Attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneAttribute = async (req, res) => {
    try {
        const Attribute = await attribueService.getOneAttribute(req.params.id);
        res.status(200).json(Attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAttribute = async (req, res) => {
    try {
        const newAttribute = await attribueService.createAttribute(req.body);
        res.status(201).json({ message: 'Atributo registrado exitosamente.', newAttribute });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAttribute = async (req, res) => {
    try {
        const updatedAttribute = await attribueService.updateAttribute(req.params.id, req.body);
        res.status(200).json({ message: 'Atributo actualizada exitosamente', updatedAttribute});
    } catch (error) {
        if (error.message === 'El nombre de la Atributo ya está registrado.') {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const updateAttributeStatus  = async (req, res) => {
    try {
        let { estadoCaracteristica } = req.body;

        if (estadoCaracteristica === '0' || estadoCaracteristica === 0) {
            estadoCaracteristica = false;
        } else if (estadoCaracteristica === '1' || estadoCaracteristica === 1) {
            estadoCaracteristica = true;
        } else if (estadoCaracteristica === true || estadoCaracteristica === false) {
            
        } else {
            return res.status(400).json({ message: 'El estado debe ser un valor booleano' });
        }
        await attribueService.updateAttributeStatus (req.params.id, estadoCaracteristica);
        res.json({ message: 'Estado actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllAttributes,
    getOneAttribute,
    createAttribute,
    updateAttribute,
    updateAttributeStatus
}