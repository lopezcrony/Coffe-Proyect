import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
	import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-create-brand-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './brand-add-dialog.component.html',
})
export class CreateBrandDialogComponent {
  brandForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateBrandDialogComponent>,
    private fb: FormBuilder
  ) {
    this.brandForm = this.fb.group({
      nombreMarca: ['', Validators.required],
      imagenURL: ['', Validators.required],
      descripcionMarca: ['', Validators.required],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.brandForm.valid) {
      this.dialogRef.close(this.brandForm.value);
    }
  }
}
