import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProvidersService } from '../providers/providers-services.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-provider-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
  ],
  template: `
    <h2 mat-dialog-title>Agregar Proveedor</h2>
    <mat-dialog-content>
      <form [formGroup]="providerForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>NIT</mat-label>
          <input matInput formControlName="nitProveedor" />
          <mat-error *ngIf="providerForm.get('nitProveedor')?.invalid">
            Este campo es requerido
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="nombreProveedor" />
          <mat-error *ngIf="providerForm.get('nombreProveedor')?.invalid">
            Este campo es requerido
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Dirección</mat-label>
          <input matInput formControlName="direccionProveedor" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Teléfono</mat-label>
          <input matInput formControlName="telefonoProveedor" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Banco</mat-label>
          <input matInput formControlName="nombreBanco" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Número de Cuenta</mat-label>
          <input matInput formControlName="numeroCuenta" />
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
      nitProveedor: ['', Validators.required],
      nombreProveedor: ['', Validators.required],
      direccionProveedor: [''],
      telefonoProveedor: [''],
      nombreBanco: [''],
      numeroCuenta: [''],
    });
  }

  onSubmit(): void {
    if (this.providerForm.valid) {
      const newProvider = this.providerForm.value;
      this.providersService.createProvider(newProvider).subscribe({
        next: () => {
          this.dialogRef.close(true); // Notifica que se agregó el proveedor
        },
        error: (err) => {
          console.error('Error al agregar proveedor:', err);
        },
      });
    }
  }
}
