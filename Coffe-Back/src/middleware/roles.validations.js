const { body, validationResult } = require('express-validator');

const validateRoles = [
    
    body('nombreRol')
        .notEmpty().withMessage('El nombre del rol es obligatorio')
        .matches(/^[a-zA-Záéíóúñ ]+$/).withMessage('El nombre del rol contiene carácteres no válidos'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const roles = (req, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({ message: 'Es requerido para la validación del token'});
    }

    const { role, name} = req.user;
    if (role !== 'Administrador') {
        return res.status(401).json({ message: `${name} No eres administrador - No puedes hacer eso` })
    }
    next();
};

const haveRole = (...roles) => {
    return (req, res = response, next) => {
        if (!req.user) {
            return res.status(500).json({ message: 'Es requerido para la validación del token'});
        }

        if (!roles.includes(req.user.role)) {
            return res.status(401).json({ message: `El servicio requiere uno de estos roles: ${roles}` });
        }

        next();
    }

};



module.exports = {
    validateRoles, 
    roles, // verifica si el usuario está autenticado y tiene el rol de "Administrador"
    haveRole // permite verificar si el usuario tiene uno de los roles especificados. 
};
