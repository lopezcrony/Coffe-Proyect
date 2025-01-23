import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { LoginService } from './login.service';
import { ValidationService } from '../../../validators/validations.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private validationService: ValidationService,
  ) {
    this.loginForm = this.fb.group({
      correoUsuario: ['', this.validationService.getValidatorsForField("login", "correoUsuario")],
      claveUsuario: ['', this.validationService.getValidatorsForField("login", "claveUsuario")],
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.invalid && (field.touched || field.dirty));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (control?.errors) {
      const errorKey = Object.keys(control.errors)[0];
      return this.validationService.getErrorMessage('login', fieldName, errorKey);
    }
    return '';
  }

  private markFormFieldsAsTouched() {
    Object.values(this.loginForm.controls).forEach(control => control.markAsTouched());
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return this.markFormFieldsAsTouched();
    }

    this.isLoading = true;
    const formValue = this.loginForm.value;
    const loginData = {
      correoUsuario: formValue.correoUsuario,
      claveUsuario: formValue.claveUsuario
    };

    this.loginService.login(loginData).subscribe({
      next: (response) => {
        this.isLoading = false;
        // Handle successful login
      },
      error: (error) => {
        this.isLoading = false;
        // Handle login error
      }
    });
  }
}