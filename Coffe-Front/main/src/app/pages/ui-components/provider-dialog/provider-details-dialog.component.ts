import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-provider-details-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div class="dialog-header">
      <h2 mat-dialog-title>
        <mat-icon color="primary">account_circle</mat-icon>
        Detalles del Proveedor
      </h2>
    </div>
    <mat-dialog-content>
      <div class="info-container">
        <div class="info-item">
          <span class="label">NIT:</span>
          <span class="value">{{ data.nitProveedor }}</span>
        </div>
        <div class="info-item">
          <span class="label">Nombre:</span>
          <span class="value">{{ data.nombreProveedor }}</span>
        </div>
        <div class="info-item">
          <span class="label">Dirección:</span>
          <span class="value">{{ data.direccionProveedor }}</span>
        </div>
        <div class="info-item">
          <span class="label">Teléfono:</span>
          <span class="value">{{ data.telefonoProveedor }}</span>
        </div>
        <div class="info-item">
          <span class="label">Banco:</span>
          <span class="value">{{ data.nombreBanco }}</span>
        </div>
        <div class="info-item">
          <span class="label">Número de Cuenta:</span>
          <span class="value">{{ data.numeroCuenta }}</span>
        </div>
        
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-stroked-button mat-dialog-close color="primary">Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .dialog-header {
        text-align: center;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }
      .dialog-header mat-icon {
        vertical-align: middle;
        margin-right: 8px;
      }
      mat-dialog-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 16px 8px;
      }
      .info-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
      }
      .label {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.87);
      }
      .value {
        color: rgba(0, 0, 0, 0.6);
      }
      .status {
        font-weight: bold;
      }
      .text-success {
        color: #4caf50;
      }
      .text-danger {
        color: #f44336;
      }
      mat-dialog-actions {
        margin-top: 16px;
        padding: 8px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
      mat-stroked-button {
        border-radius: 24px;
      }
    `,
  ],
})
export class ProviderDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProviderDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
