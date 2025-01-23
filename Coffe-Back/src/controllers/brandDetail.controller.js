const detalleMarcaService = require('../services/brandDetail.service');

const getAllDetalleMarcas = async (req, res) => {
    try {
        const detalleMarcas = await detalleMarcaService.getAllDetalleMarcas();
        res.status(200).json(detalleMarcas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneDetalleMarca = async (req, res) => {
    try {
        const detalleMarca = await detalleMarcaService.getOneDetalleMarca(req.params.idMarca, req.params.idProveedor);
        if (!detalleMarca) {
            return res.status(404).json({ message: 'Detalle de marca no encontrado.' });
        }
        res.status(200).json(detalleMarca);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addMarcaToProveedor = async (req, res) => {
    try {
        const newDetalleMarca = await detalleMarcaService.addMarcaToProveedor(req.body);
        res.status(201).json({ message: 'Detalle de marca agregado exitosamente.', newDetalleMarca });
    } catch (error) {
        if (error.message === 'La marca especificada no existe.') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

const deleteOneDetalleMarca = async (req, res) => {
    try {
        const result = await detalleMarcaService.deleteOneDetalleMarca(req.params.idMarca, req.params.idProveedor);
        if (!result) {
            return res.status(404).json({ message: 'Detalle de marca no encontrado.' });
        }
        res.json({ message: 'Detalle de marca eliminado con éxito.' });
    } catch (error) {
        if (error.message === 'La marca especificada no existe.') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllDetalleMarcas,
    getOneDetalleMarca,
    addMarcaToProveedor,
    deleteOneDetalleMarca
};
