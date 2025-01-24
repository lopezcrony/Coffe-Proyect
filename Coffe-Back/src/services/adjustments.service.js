const ajusteRepository = require('../repository/adjustments.repository');
const productRepository = require('../repository/products.repository')
const { sequelize } = require('../config/dataBase');


const getAllAjustes = async () => {
    try {
        return await ajusteRepository.getAllAjustes();
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

const getOneAjuste = async (idAjuste) => {
    try {
        return await ajusteRepository.getOneAjuste(idAjuste);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};
const addAjuste = async (ajusteData, options = {}) => {
    const transaction = await sequelize.transaction();
    try {
        // Buscar el producto por ID
        const product = await productRepository.findProductById(ajusteData.idProducto, { transaction });
        if (!product) throw new Error('Producto no encontrado.');

        // Verificar si hay suficiente stock
        if (product.stock < ajusteData.cantidad) {
            throw new Error(`Existencias insuficientes. Actualmente hay ${product.stock} de ${product.nombreProducto}`);
        }

        // Calcular el nuevo stock
        const newStock = product.stock - ajusteData.cantidad;

        // Actualizar el stock del producto
        await productRepository.updateProductoStock(product.idProducto, newStock, { transaction });

        // Crear el ajuste
        const newAjuste = await ajusteRepository.addAjuste(ajusteData, { transaction });

        // Confirmar la transacción
        await transaction.commit();

        return newAjuste;
    } catch (error) {
        // Deshacer la transacción en caso de error
        if (transaction) await transaction.rollback();
        throw new Error('SERVICE: ' + error.message);
    }
};

const deleteOneAjuste = async (idAjuste) => {
    try {
        return await ajusteRepository.deleteOneAjuste(idAjuste);
    } catch (error) {
        throw new Error('SERVICE: ' + error.message);
    }
};

module.exports = {
    getAllAjustes,
    getOneAjuste,
    addAjuste,
    deleteOneAjuste
};
