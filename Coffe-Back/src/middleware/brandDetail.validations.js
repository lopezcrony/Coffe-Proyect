const { body } = require('express-validator');

const detalleMarcaValidationRules = () => {
    return [
        body('idMarca')
            .isInt().withMessage('El idMarca debe ser un número entero')
            .notEmpty().withMessage('El idMarca es obligatorio'),
        body('idProveedor')
            .isInt().withMessage('El idProveedor debe ser un número entero')
            .notEmpty().withMessage('El idProveedor es obligatorio')
    ];
};

module.exports = {
    detalleMarcaValidationRules
};