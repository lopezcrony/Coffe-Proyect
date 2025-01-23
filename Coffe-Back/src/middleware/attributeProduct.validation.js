const { body, validationResult } = require('express-validator');

const validateProductoCaracteristica = [
    
    body('valorCaracteristica')
        .notEmpty().withMessage('El valor de la característica es obligatorio')
        .isLength({ max: 255 }).withMessage('El valor de la característica debe tener un máximo de 255 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateProductoCaracteristica
};
