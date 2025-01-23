const { body, validationResult } = require('express-validator');

const validateProducts = [
    body('nombreProducto')
        .notEmpty().withMessage('El nombre del producto es obligatorio')
        .matches(/^[0-9a-zA-Záéíóúñ ]+$/).withMessage('Los caracteres no son válidos'),

    body('stock')
        .notEmpty().withMessage('El stock es obligatorio')
        .isInt({ min: 0 }).withMessage('El stock debe ser un número entero no negativo'),

    body('precioVenta')
        .notEmpty().withMessage('El precio de venta es obligatorio')
        .isFloat({ min: 0 }).withMessage('El precio de venta debe ser un número positivo'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateProducts
};
