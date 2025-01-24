import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProvidersService } from '../providers/providers-services.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-add-provider-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    CommonModule, // Asegúrate de incluir CommonModule
  ],
  template: `
    <h2 mat-dialog-title>Agregar Proveedor</h2>
    <mat-dialog-content>
      <form [formGroup]="providerForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>NIT</mat-label>
          <input matInput formControlName="nitProveedor" />
          <mat-error *ngIf="providerForm.get('nitProveedor')?.invalid && providerForm.get('nitProveedor')?.touched">
            El NIT debe ser un número de 9 dígitos
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="nombreProveedor" />
          <mat-error *ngIf="providerForm.get('nombreProveedor')?.invalid && providerForm.get('nombreProveedor')?.touched">
            El nombre es requerido y debe contener solo letras
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Dirección</mat-label>
          <input matInput formControlName="direccionProveedor" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Teléfono</mat-label>
          <input matInput formControlName="telefonoProveedor" />
          <mat-error *ngIf="providerForm.get('telefonoProveedor')?.invalid && providerForm.get('telefonoProveedor')?.touched">
            El teléfono debe tener entre 7 y 10 dígitos
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Banco</mat-label>
          <input matInput formControlName="nombreBanco" />
          <mat-error *ngIf="providerForm.get('nombreBanco')?.invalid && providerForm.get('nombreBanco')?.touched">
            El nombre del banco es requerido y debe contener solo letras
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Número de Cuenta</mat-label>
          <input matInput formControlName="numeroCuenta" />
          <mat-error *ngIf="providerForm.get('numeroCuenta')?.invalid && providerForm.get('numeroCuenta')?.touched">
            El número de cuenta debe tener 11 dígitos
          </mat-error>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button color="primary" (click)="onSubmit()" [disabled]="providerForm.invalid">Guardar</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class AddProviderDialogComponent {
  providerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProviderDialogComponent>,
    private providersService: ProvidersService
  ) {
    this.providerForm = this.fb.group({
      nitProveedor: ['', [Validators.pattern('^[0-9]{9}$')]], // NIT opcional pero si se ingresa debe tener 9 dígitos
      nombreProveedor: ['', [Validators.required, Validators.pattern('^[a-zA-Záéíóúñ ]+$')]], // Solo letras
      direccionProveedor: [''], // Dirección opcional
      telefonoProveedor: ['', [Validators.pattern('^[0-9]{7,10}$')]], // Teléfono opcional pero si se ingresa debe tener entre 7 y 10 dígitos
      nombreBanco: ['', [Validators.required, Validators.pattern('^[a-zA-Záéíóúñ ]+$')]], // Solo letras
      numeroCuenta: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]], // 11 dígitos
         });
  }

  onSubmit(): void {
    if (this.providerForm.valid) {
      const providerData = this.providerForm.value;

      // Enviar la información del proveedor
      this.providersService.createProvider(providerData).subscribe({
        next: () => {
          this.dialogRef.close(true); // Notifica que se agregó el proveedor
        },
        error: (err) => {
          console.error('Error al agregar proveedor:', err);
        },
      });
    }
  }}
