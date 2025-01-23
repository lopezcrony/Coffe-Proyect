export interface User {
    idUsuario: number;
    idRol: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    telefonoUsuario: string;
    correoUsuario: string;
    claveUsuario: string;
    estadoUsuario?: boolean;
  }