import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

export interface performanceData {
  id: number;
  imagePath: string;
  pname: string;
  category: string;
  progress: number;
  sales: number;
  status: string;
  }
  const PROJECT_DATA: performanceData[] = [
  {
  id: 1,
  imagePath: 'assets/images/products/s6.jpg',
  pname: 'Gaming Console',
  category: 'Electronics',
  progress: 78.5,
  sales: 3.9,
  status: 'low',
  },
  {
  id: 2,
  imagePath: 'assets/images/products/s9.jpg',
  pname: 'Leather Purse',
  category: 'Fashion',
  progress: 58.6,
  sales: 3.5,
  status: 'medium',
  },
  {
  id: 3,
  imagePath: 'assets/images/products/s7.jpg',
  pname: 'Red Velvate Dress',
  category: 'Womens Fashion',
  progress: 25,
  sales: 3.8,
  status: 'high',
  },
  {
  id: 4,
  imagePath: 'assets/images/products/s4.jpg',
  pname: 'Headphone Boat',
  category: 'Electronics',
  progress: 96.3,
  sales: 3.54,
  status: 'critical',
  },
  ];

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [MaterialModule, MatTableModule, CommonModule, MatCardModule, MatDividerModule,],
  templateUrl: './providers.component.html',
  
})
export class ProvidersComponent {

  displayedColumns2: string[] = ['product', 'progress', 'status', 'sales'];
dataSource2 = PROJECT_DATA;


}
