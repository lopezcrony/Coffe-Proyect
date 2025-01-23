import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Proveedor } from './providers.models';
import { ProvidersService } from './providers-services.service';


@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [MaterialModule, MatTableModule, CommonModule, MatCardModule, MatDividerModule,
           MatMenuModule, MatIconModule, TablerIconsModule, MatPaginator, MatPaginatorModule,
          ],
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  
 
  
})
export class ProvidersComponent implements OnInit, AfterViewInit {
  // Definir las columnas de la tabla
  displayedColumns: string[] = ['nombreProveedor', 'numeroCuenta', 'estadoProveedor', 'Acciones'];
  
  // DataSource para la tabla de Material
  dataSource = new MatTableDataSource<Proveedor>([]);
  
  // Referencia al paginador
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private providersService: ProvidersService) {}

  ngOnInit(): void {
    this.loadProviders(); // Cargar los datos al inicializar el componente
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator; // Configurar el paginador
    }
  }

  // Método para cargar los datos desde el servicio
  loadProviders(): void {
    this.providersService.getAllProviders().subscribe({
      next: (data) => {
        console.log('Datos cargados:', data); // Debug
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
      },
    });
  }
}
