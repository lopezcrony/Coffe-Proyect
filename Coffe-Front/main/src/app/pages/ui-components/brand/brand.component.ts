import { Component, OnInit,ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para consumir API (opcional en simulación)
import { CommonModule, JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; 
import { BrandService } from './brand.service'; // Importa tu servicio
import { Brand } from './brand.models';
import { CreateBrandDialogComponent } from '../brand-dialog/brand-add-dialog.component';
import { MatPaginator } from '@angular/material/paginator';



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
    MatPaginator,
  ],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  products: Brand[] = []; 
  paginatedProducts: Brand[] = [];
  pageSize = 10; // Tamaño de la página
  currentPage = 0; // Página actual

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog, private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  private loadBrands(): void {
    this.brandService.getAllProviders().subscribe(
      (response: Brand[]) => {
        this.products = response;
        this.updatePaginatedProducts(); // Actualiza la paginación
      },
      (error) => {
        console.error('Error al cargar las marcas desde la API:', error);
      }
    );
  }
  updatePaginatedProducts(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedProducts();
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

