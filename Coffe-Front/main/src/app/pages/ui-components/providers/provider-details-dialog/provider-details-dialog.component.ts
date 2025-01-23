import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-provider-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Detalles del Proveedor</h2>
    <mat-dialog-content>
      <p><strong>NIT:</strong> {{ data.nitProveedor }}</p>
      <p><strong>Nombre:</strong> {{ data.nombreProveedor }}</p>
      <p><strong>Dirección:</strong> {{ data.direccionProveedor }}</p>
      <p><strong>Teléfono:</strong> {{ data.telefonoProveedor }}</p>
      <p><strong>Banco:</strong> {{ data.nombreBanco }}</p>
      <p><strong>Número de Cuenta:</strong> {{ data.numeroCuenta }}</p>
      <p><strong>Estado:</strong> 
        <span [ngClass]="{ 'text-success': data.estadoProveedor, 'text-danger': !data.estadoProveedor }">
          {{ data.estadoProveedor ? 'Activo' : 'Inactivo' }}
        </span>
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .text-success { color: green; }
    .text-danger { color: red; }
  `],
})
export class ProviderDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProviderDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
