const express = require('express');
const router = express.Router();
const upload = require('../middleware/images.validations'); 
const ImageController = require('../controllers/images.controller');

// Ruta para subir una imagen
router.post('/upload', 
  upload.single('image'),
  ImageController.uploadImage
);

// Ruta para eliminar una imagen
router.delete('/delete/:filename', 
  ImageController.deleteImage
);

module.exports = router;