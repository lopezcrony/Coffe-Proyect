const { body, validationResult } = require('express-validator');

const validateImagenProducto = [
    body('idProducto')
        .isInt({ min: 1 }).withMessage('El idProducto debe ser un número entero positivo')
        .notEmpty().withMessage('El idProducto es obligatorio'),

    body('esObligatoria')
        .isBoolean().withMessage('El valor de esObligatoria debe ser booleano'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateImagenProducto
};
