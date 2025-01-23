const { body, validationResult } = require('express-validator');

const validateCaracteristica = [
    body('nombreCaracteristica')
        .notEmpty().withMessage('El nombre de la característica es obligatorio')
        .isLength({ min: 1, max: 50 }).withMessage('El nombre de la característica debe tener entre 1 y 50 caracteres')
        .matches(/^[0-9a-zA-Záéíóúñ ]+$/).withMessage('El nombre de la característica contiene caracteres no válidos'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCaracteristica
};
