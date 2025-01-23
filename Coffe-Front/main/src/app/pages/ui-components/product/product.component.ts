import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para consumir API (opcional en simulación)
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; 

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
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Arreglo para almacenar los productos
  apiUrl = 'https://api.ejemplo.com/products'; // Cambia por la URL de tu API (si la tienes)

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Simulación de datos
    this.loadMockData();

    // Cargar productos desde la API (descomentar si tienes una API)
    // this.loadProductsFromApi();
  }

  // Método para cargar productos desde una API
  private loadProductsFromApi(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error('Error al cargar productos desde la API', error);
      }
    );
  }

  // Simulación de productos para pruebas
  private loadMockData(): void {
    this.products = [
      {
        name: 'Nestle',
        image: '/assets/images/products/s11.jpg',
       
        link: '/widgets/cards',
      },
      {
        name: 'Dove Soap',
        image: '/assets/images/products/s9.jpg',
       
        link: '/widgets/cards',
      },
      {
        name: 'Colgate Toothpaste',
        image: '/assets/images/products/s7.jpg',
      
        link: '/widgets/cards',
      },
      {
        name: 'Soft Teddybear',
        image: '/assets/images/products/s6.jpg',
    
        link: '/widgets/cards',
      },
    ];
  }
}
