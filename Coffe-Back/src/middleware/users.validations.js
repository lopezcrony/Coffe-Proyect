const { body, validationResult } = require('express-validator');

// Validaciones comunes que se usarán tanto en crear como en actualizar
const commonValidations = [
            
    body('nombreUsuario')
        .notEmpty().withMessage('El nombre del usuario es obligatorio')
        .matches(/^[a-zA-Záéíóúñ ]+$/).withMessage('El nombre del usuario contiene carácteres no válidos'),
    
    body('apellidoUsuario')
        .notEmpty().withMessage('El apellido del usuario es obligatorio')
        .matches(/^[a-zA-Záéíóúñ ]+$/).withMessage('El apellido del usuario contiene carácteres no válidos'),
    
    body('telefonoUsuario')
        .notEmpty().withMessage('El telefono del usuario es obligatorio')
        .isLength({ min: 7, max: 10 }).withMessage('El teléfono del usuario debe contener mínimo 7 dígitos y máximo 10')
        .matches(/^[0-9]+$/).withMessage('El teléfono del usuario solo debe contener números'),

    body('correoUsuario')
        .notEmpty().withMessage('El correo del usuario es obligatorio')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage('El correo electrónico debe tener un formato válido'),
];

// Validación de contraseña
const passwordValidation = 
    body('claveUsuario')
        .notEmpty().withMessage('La contraseña del usuario es obligatoria')
        .isLength({max: 4 }).withMessage('La contraseña debe tener 4 números')
        .matches(/^[0-9]+$/).withMessage('La contraseña debe contener números');

// Validación de contraseña opcional para actualización
const optionalPasswordValidation = 
    body('claveUsuario')
        .optional() // Hace que el campo sea opcional
        .isLength({max: 4 }).withMessage('La contraseña debe tener 4 números')
        .matches(/^[0-9]+$/).withMessage('La contraseña debe contener números');

// Middleware para validar errores
const validateErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Validaciones para crear usuario (incluye contraseña obligatoria)
const validateCreateUser = [
    ...commonValidations,
    passwordValidation,
    validateErrors
];

// Validaciones para actualizar usuario (contraseña opcional)
const validateUpdateUser = [
    ...commonValidations,
    optionalPasswordValidation,
    validateErrors
];

module.exports = {
    validateCreateUser,
    validateUpdateUser
};