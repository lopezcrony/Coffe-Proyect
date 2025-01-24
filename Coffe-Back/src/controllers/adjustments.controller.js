const ajusteService = require('../services/adjustments.service');

const getAllAjustes = async (req, res) => {
    try {
        const ajustes = await ajusteService.getAllAjustes();
        res.status(200).json(ajustes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneAjuste = async (req, res) => {
    try {
        const ajuste = await ajusteService.getOneAjuste(req.params.idAjuste);
        if (!ajuste) {
            return res.status(404).json({ message: 'Ajuste no encontrado.' });
        }
        res.status(200).json(ajuste);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addAjuste = async (req, res) => {
    try {
        const newAjuste = await ajusteService.addAjuste(req.body);
        res.status(201).json({ message: 'Ajuste agregado exitosamente.', newAjuste });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneAjuste = async (req, res) => {
    try {
        const result = await ajusteService.deleteOneAjuste(req.params.idAjuste);
        if (!result) {
            return res.status(404).json({ message: 'Ajuste no encontrado.' });
        }
        res.json({ message: 'Ajuste eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAjustes,
    getOneAjuste,
    addAjuste,
    deleteOneAjuste
};
