import { Component, OnInit, ViewChild } from '@angular/core';
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
export class ProvidersComponent implements OnInit{
  providers: Proveedor[] = [];

  constructor(private providersService: ProvidersService) {
    
  }
  ngOnInit(): void {
    this.loadProviders();
  }
  OnInit(){
    this.loadProviders();
  }

  loadProviders() {
    this.providersService.getAllProviders().subscribe(data => {
      this.providers = data;
    });
  }

  displayedColumns2: string[] = ['Proveedor', 'debt', 'status', 'Acciones'];
dataSource2 = new MatTableDataSource<Proveedor>(this.providers);

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
Object.create(null);
/**
* Set the paginator after the view init since this component will
* be able to query its view for the initialized paginator.
*/
ngAfterViewInit(): void {
this.dataSource2.paginator = this.paginator;
}
}
