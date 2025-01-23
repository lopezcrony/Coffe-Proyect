import { Routes } from '@angular/router';

import { LoginComponent } from './side-login/login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { AppSideLoginComponent } from './side-login/side-login.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login2',
        component: AppSideLoginComponent,
      },
      
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
    ],
  },
];
