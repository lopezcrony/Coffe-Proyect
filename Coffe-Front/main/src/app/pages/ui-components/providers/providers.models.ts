export interface Proveedor {
    idProveedor: number;
    nitProveedor: string;
    nombreProveedor: string;
    direccionProveedor: string;
    telefonoProveedor: string;
    nombreBanco: string;
    numeroCuenta: string;
    estadoProveedor?: boolean;
}