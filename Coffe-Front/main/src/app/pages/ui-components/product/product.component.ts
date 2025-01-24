import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../brand/brand.service';
import { Brand } from '../brand/brand.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MaterialModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
