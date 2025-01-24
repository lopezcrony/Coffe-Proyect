const fs = require('fs-extra');
const path = require('path');

class ImageController {
  // Subir una imagen
  async uploadImage(req, res) {
    try {
      // Si no se sube ninguna imagen
      if (!req.file) {
        return res.status(400).json({ 
          message: 'No se ha subido ninguna imagen' 
        });
      }

      // Url de la imagen (puedes personalizar según tu necesidad)
      const imageUrl = `/uploads/images/${req.file.filename}`;

      res.status(200).json({ 
        message: 'Imagen subida exitosamente',
        imageUrl: imageUrl 
      });
    } catch (error) {
      console.error('Error al subir imagen:', error);
      res.status(500).json({ 
        message: 'Error al subir la imagen',
        error: error.message 
      });
    }
  }

  // Eliminar una imagen
  async deleteImage(req, res) {
    try {
      const { filename } = req.params;
      const imagePath = path.join(__dirname, '../uploads/images', filename);

      // Verificar si el archivo existe
      if (await fs.exists(imagePath)) {
        await fs.remove(imagePath);
        res.status(200).json({ 
          message: 'Imagen eliminada exitosamente' 
        });
      } else {
        res.status(404).json({ 
          message: 'Imagen no encontrada' 
        });
      }
    } catch (error) {
      console.error('Error al eliminar imagen:', error);
      res.status(500).json({ 
        message: 'Error al eliminar la imagen',
        error: error.message 
      });
    }
  }
}

module.exports = new ImageController();