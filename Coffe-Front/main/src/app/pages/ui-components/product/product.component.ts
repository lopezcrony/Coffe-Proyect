import { Component, OnInit, ViewChild  } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './product.service';
import { Product } from './product.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MaterialModule,CommonModule,
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
    MatInputModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})


export class ProductComponent implements OnInit {
  displayedColumns1: string[] = [
    'nombreProducto',
    'stock',
    'precioVenta',
    'estadoProducto',
   
  ];
  dataSource1 = new MatTableDataSource<Product>(); // Cambiado a MatTableDataSource
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  pageSize = 8;
  currentPage = 0;
  filterText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    // Configurar el filtro
    this.dataSource1.filterPredicate = (data: Product, filter: string) => {
      const lowerCaseFilter = filter.toLowerCase();
      return data.nombreProducto.toLowerCase().includes(lowerCaseFilter);
    };

    this.loadProducts();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource1.paginator = this.paginator; // Configurar el paginador
    }
  }

  applyFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Casting explícito
    const filterValue = inputElement.value.trim().toLowerCase(); // Obtener el valor del input
    this.dataSource1.filter = filterValue; // Asignar el filtro al DataSource
  }

  loadProducts(): void {
    this.ProductsService.getAllProducts().subscribe({
      next: (products) => {
        this.dataSource1.data = products; // Actualizar la data de la tabla
      },
      error: (err) => console.error('Error loading products:', err),
    });
  }
}
