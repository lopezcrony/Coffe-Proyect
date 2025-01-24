const { body, validationResult } = require('express-validator');

const validateBrand = [
    body('brandData.nombreMarca')
        .notEmpty().withMessage('El nombre de la marca es obligatorio')
        .isString().withMessage('El nombre de la marca debe ser un string')
        .isLength({ max: 50 }).withMessage('El nombre de la marca debe tener un máximo de 50 caracteres'),

    body('brandData.descripcionMarca')
        .optional()
        .isString().withMessage('La descripción de la marca debe ser un string')
        .isLength({ max: 100 }).withMessage('La descripción de la marca debe tener un máximo de 100 caracteres'),

    body('brandData.imagenURL')
        .notEmpty().withMessage('La URL de la imagen es obligatoria')
        .isString().withMessage('La URL de la imagen debe ser un string')
        .isURL().withMessage('La URL de la imagen debe ser válida'),

    body('detalleMarcaData.idProveedor')
        .isInt({ min: 1 }).withMessage('El ID del proveedor debe ser un número entero positivo')
        .notEmpty().withMessage('El ID del proveedor es obligatorio'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateBrand
};
