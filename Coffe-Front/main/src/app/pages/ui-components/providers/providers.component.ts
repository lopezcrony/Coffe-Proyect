import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface performanceData {
  id: number;
  imagePath: string;
  pname: string;
  Ubicacion: string;
  debt: number;
  
  status: string;
  }
  const PROJECT_DATA: performanceData[] = [
    {
      id: 1,
      imagePath: 'assets/images/products/s6.jpg',
      pname: 'Café de Antioquia',
      Ubicacion: 'Medellin',
      debt: 1234.56,
      status: 'A',
    },
    {
      id: 2,
      imagePath: 'assets/images/products/s9.jpg',
      pname: 'Café del Huila',
      Ubicacion: 'Huila',
      debt: 1234.56,
      status: 'I',
    },
    {
      id: 3,
      imagePath: 'assets/images/products/s7.jpg',
      pname: 'Café de Nariño',
      Ubicacion: 'Nariño',
      debt: 1234.56,
      status: 'A',
    },
    {
      id: 4,
      imagePath: 'assets/images/products/s4.jpg',
      pname: 'Café del Cauca',
      Ubicacion: 'Cauca',
      debt: 1234.56,
      status: 'I',
    },
  ];

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [MaterialModule, MatTableModule, CommonModule, MatCardModule, MatDividerModule, MatMenuModule, MatIconModule, TablerIconsModule,],
  templateUrl: './providers.component.html',
  
})
export class ProvidersComponent {
  constructor() {}
  displayedColumns2: string[] = ['Proveedor', 'debt', 'status', 'Acciones'];
dataSource2 = PROJECT_DATA;


}
