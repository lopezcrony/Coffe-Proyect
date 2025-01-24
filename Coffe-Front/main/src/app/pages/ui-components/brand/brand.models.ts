export interface Brand {
  idMarca: number;
  descripcionMarca: string;
  nombreMarca: string;
  imagenURL: string;
  estadoMarca: boolean;
}

export interface CreateBrandPayload {
  brandData: {
    nombreMarca: string;
    descripcionMarca: string;
    imagenURL: string;
  };
  detalleMarcaData: {
    idProveedor: number;
  };
}

export interface BrandForm {
  nombreMarca: string;
  descripcionMarca: string;
  imagenURL: string;
  idProveedor: number; // Añadir idProveedor aquí
}
