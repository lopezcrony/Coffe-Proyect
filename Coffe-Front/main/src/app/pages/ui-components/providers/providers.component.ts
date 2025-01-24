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
import { MatButtonModule } from '@angular/material/button';
import { Proveedor } from './providers.models';
import { ProvidersService } from './providers-services.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProviderDetailsDialogComponent } from '../provider-dialog/provider-details-dialog.component';
import { AddProviderDialogComponent } from '../provider-dialog/add-provider-dialog.component';




@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [MaterialModule, MatTableModule, CommonModule, MatCardModule, MatDividerModule,
           MatMenuModule, MatIconModule, TablerIconsModule, MatPaginator, MatPaginatorModule,
           MatDialogModule, 
           MatButtonModule, 
           ProviderDetailsDialogComponent,
           AddProviderDialogComponent,
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

  constructor(private providersService: ProvidersService,  private dialog: MatDialog ) {}

  ngOnInit(): void {
    // Configurar el filtro personalizado
    this.dataSource.filterPredicate = (data: Proveedor, filter: string) => {
      const lowerCaseFilter = filter.toLowerCase();
      return (
        data.nombreProveedor.toLowerCase().includes(lowerCaseFilter) ||
        data.numeroCuenta.toLowerCase().includes(lowerCaseFilter)
      );
    };

    this.loadProviders();
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

  applyFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Casting explícito
    const filterValue = inputElement.value.trim().toLowerCase(); // Obtener el valor del input
    this.dataSource.filter = filterValue; // Asignar el filtro al DataSource
  }

  openDetailsDialog(provider: Proveedor): void {
    this.dialog.open(ProviderDetailsDialogComponent, {
      width: '450px', 
      data: provider, 
    });
  }

  openAddProviderDialog(): void {
    const dialogRef = this.dialog.open(AddProviderDialogComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProviders(); // Recargar la tabla si se agregó un proveedor
      }
    });
  }

  
 
}