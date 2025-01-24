import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { BrandService } from './brand.service';
import { Brand } from './brand.models';
import { CreateBrandDialogComponent } from '../brand-dialog/brand-add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppDialogContentComponent } from '../brand-dialog/brand-details-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    RouterModule,
    MatPaginator,
    MatTooltipModule,
    FormsModule, 
    MatFormFieldModule,
    ReactiveFormsModule, 
    MatInputModule,
  ],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  products: Brand[] = [];
  filteredProducts: Brand[] = []; // Lista filtrada
  paginatedProducts: Brand[] = [];
  pageSize = 8;
  currentPage = 0;
  filterText = ''; // Texto del filtro

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  private loadBrands(): void {
    this.brandService.getAllBrands().subscribe(
      (response: Brand[]) => {
        this.products = response;
        this.filteredProducts = [...this.products]; // Inicializar lista filtrada con todos los productos
        this.updatePaginatedProducts(); // Configurar paginación inicial
      },
      (error) => {
        console.error('Error al cargar las marcas desde la API:', error);
      }
    );
  }

  // Actualiza los productos paginados después de aplicar el filtro
  private updatePaginatedProducts(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
  }

  // Lógica del filtro
  applyFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Obtener el valor del input
    this.filterText = inputElement.value.trim().toLowerCase(); // Actualizar el texto del filtro
    this.filteredProducts = this.products.filter((product) =>
      product.nombreMarca.toLowerCase().includes(this.filterText)
    );
    this.currentPage = 0; // Reiniciar la página al aplicar el filtro
    this.updatePaginatedProducts(); // Actualizar los productos paginados
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

  private createBrand(newBrand: Brand): void {
    const payload = {
      brandData: {
        nombreMarca: newBrand.nombreMarca,
        descripcionMarca: newBrand.descripcionMarca,
        imagenURL: newBrand.imagenURL,
      },
      detalleMarcaData: {
        idProveedor: 1, // Ajusta este valor dinámicamente si es necesario
      },
    };
  
    this.brandService.createBrand(payload).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.products.push(response.newBrand); // Agrega la nueva marca a la lista
        this.applyFilter(new Event('input')); // Actualiza la lista filtrada
      },
      (error) => {
        console.error('Error al crear la marca:', error);
      }
    );
  }


  openBrandDialog(product: Brand): void {
    this.dialog.open(AppDialogContentComponent, {
      data: {
        nombreMarca: product.nombreMarca,
        descripcionMarca: product.descripcionMarca,
      },
    });
  }

  redirectToProducts(idMarca: number): void {
    console.log('Redirigiendo a Productos con idMarca:', idMarca);
    this.router.navigate(['/Productos/', idMarca]);
  }
}
