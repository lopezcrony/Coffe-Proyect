import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para consumir API (opcional en simulación)
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; 
import { BrandService } from './brand.service'; // Importa tu servicio
import { Brand } from './brand.models';
import { CreateBrandDialogComponent } from '../brand-dialog/brand-add-dialog.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    // Importar los módulos necesarios
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    RouterModule,
  ],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  products: Brand[] = []; 

  constructor(private dialog: MatDialog, private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  private loadBrands(): void {
    this.brandService.getAllProviders().subscribe(
      (response: Brand[]) => {
        this.products = response;
      },
      (error) => {
        console.error('Error al cargar las marcas desde la API:', error);
      }
    );
  }
  openCreateBrandDialog(): void {
    const dialogRef = this.dialog.open(CreateBrandDialogComponent);

    dialogRef.afterClosed().subscribe((result: Brand) => {
      if (result) {
        this.createBrand(result);
      }
    });
  }

  // Método para enviar la nueva marca a la API
  private createBrand(newBrand: Brand): void {
    this.brandService.createProvider(newBrand).subscribe(
      (response) => {
        this.products.push(response); // Agrega la nueva marca a la lista
      },
      (error) => {
        console.error('Error al crear la marca:', error);
      }
    );
  }
}
