const { body, validationResult } = require('express-validator');

const validateAjuste = [
    body('idProducto')
        .isInt({ min: 1 }).withMessage('El idProducto debe ser un número entero positivo')
        .notEmpty().withMessage('El idProducto es obligatorio'),

    body('idUsuario')
        .isInt({ min: 1 }).withMessage('El idUsuario debe ser un número entero positivo')
        .notEmpty().withMessage('El idUsuario es obligatorio'),

    body('motivoAjuste')
        .notEmpty().withMessage('El motivo del ajuste es obligatorio')
        .isLength({ max: 100 }).withMessage('El motivo del ajuste debe tener un máximo de 100 caracteres')
        .matches(/^[a-zA-Záéíóúñ ]+$/).withMessage('El motivo del ajuste contiene caracteres no válidos'),

    body('cantidad')
        .isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo')
        .notEmpty().withMessage('La cantidad es obligatoria'),

    body('fechaDeBaja')
        .isISO8601().withMessage('La fecha de baja debe ser una fecha válida')
        .notEmpty().withMessage('La fecha de baja es obligatoria'),

    body('estadoAjuste')
        .optional()
        .isBoolean().withMessage('El estado del ajuste debe ser booleano'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateAjuste
};
