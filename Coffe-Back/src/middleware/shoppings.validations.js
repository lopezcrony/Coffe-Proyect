const { body, validationResult } = require('express-validator');
const moment = require('moment');

const validateShopping = [
    // Validar campos dentro de 'shopping'
    body('shopping.idProveedor')
        .notEmpty().withMessage('El id del proveedor es obligatorio'),

    // Validar el array 'shoppingDetail'
    body('shoppingDetail')
        .isArray().withMessage('Detalles de compra deben ser un array')
        .notEmpty().withMessage('Debe incluir al menos un detalle de compra')
        .custom(details => {
            for (const detail of details) {
                
                if (!detail.cantidadProducto || !Number.isInteger(detail.cantidadProducto) || detail.cantidadProducto <= 0) {
                    throw new Error('La cantidad de producto es obligatoria y debe ser un número entero positivo');
                }
                if (!detail.precioCompraUnidad || typeof detail.precioCompraUnidad !== 'number' || detail.precioCompraUnidad <= 0) {
                    throw new Error('El precio de compra por unidad es obligatorio y debe ser un número positivo');
                }
                if (!detail.fechaTostion || !Date(detail.fechaTostion)) {
                    throw new Error('La fecha de tostion es obligatoria.');
                }
                if (!detail.fechaVencimiento || !Date(detail.fechaVencimiento)) {
                    throw new Error('La fecha de vencimiento es obligatoria.');
                }
            }
            return true;
        }),

    // Middleware para manejar errores de validación
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateShopping
};
