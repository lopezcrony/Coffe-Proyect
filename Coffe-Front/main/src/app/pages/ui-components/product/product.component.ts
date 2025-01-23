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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MaterialModule, MatTableModule, CommonModule, MatCardModule, MatDividerModule,
             MatMenuModule, MatIconModule, TablerIconsModule, MatPaginator, MatPaginatorModule,
             MatDialogModule, 
             MatButtonModule, 
            ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  
}
