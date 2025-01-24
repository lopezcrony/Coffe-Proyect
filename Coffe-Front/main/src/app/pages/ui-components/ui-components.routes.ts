import { Routes, RouterModule } from '@angular/router';

// ui
import { ProvidersComponent } from './providers/providers.component';
import { BrandComponent } from './brand/brand.component';
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { ProductComponent } from './product/product.component';


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Proveedores',
        component: ProvidersComponent,
      },
      {
        path: 'Vitrina',
        component: BrandComponent,
      },
      {
        path: 'Compras',
        component: BrandComponent,
      },
      {
        path: 'Productos/:idMarca',
        component: ProductComponent,
      },
      {
        path: 'badge',
        component: AppBadgeComponent,
      },

      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
