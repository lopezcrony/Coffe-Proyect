import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; // Importar MatSelectModule
import { CommonModule } from '@angular/common';
import { ProvidersService } from '../providers/providers-services.service';
import { Proveedor } from '../providers/providers.models';
import { MatTableDataSource } from '@angular/material/table';
import { BrandForm } from '../brand/brand.models'; // Importar BrandForm

@Component({
  selector: 'app-create-brand-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule, // Añadir MatSelectModule
  ],
  templateUrl: './brand-add-dialog.component.html',
})
export class CreateBrandDialogComponent implements OnInit {
  brandForm: FormGroup;
  dataSource = new MatTableDataSource<Proveedor>([]);

  constructor(
    private dialogRef: MatDialogRef<CreateBrandDialogComponent>,
    private fb: FormBuilder,
    private providersService: ProvidersService
  ) {
    this.brandForm = this.fb.group({
      nombreMarca: ['', Validators.required],
      imagenURL: ['', Validators.required],
      descripcionMarca: ['', Validators.required],
      idProveedor: [null, Validators.required], // Campo para el ID del proveedor
    });
  }

  ngOnInit(): void {
    this.loadProviders();
  }
  
  loadProviders(): void {
    this.providersService.getAllProviders().subscribe({
      next: (data) => {
        // Filtrar proveedores activos
        this.dataSource.data = data.filter(provider => provider.estadoProveedor);
        console.log('Datos cargados:', this.dataSource.data); // Debug
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.brandForm.valid) {
      console.log(this.brandForm.value);
      this.dialogRef.close(this.brandForm.value as BrandForm); // Asegúrate de que el valor tenga el tipo correcto
    }
  }
}
