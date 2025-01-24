const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Carpeta donde se guardarán las imágenes
    cb(null, 'uploads/images')
  },
  filename: (req, file, cb) => {
    // Generar un nombre único para cada imagen
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});

// Filtro para validar solo imágenes
const imageFilter = (req, file, cb) => {
  // Acepta imágenes con estas extensiones
  if (
    file.mimetype === 'image/png' || 
    file.mimetype === 'image/jpg' || 
    file.mimetype === 'image/jpeg' || 
    file.mimetype === 'image/gif'
  ) {
    cb(null, true)
  } else {
    cb(new Error('Formato de imagen no válido'), false)
  }
};

// Configuración final de Multer
const upload = multer({ 
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // Límite de 5MB
  }
});

module.exports = upload;