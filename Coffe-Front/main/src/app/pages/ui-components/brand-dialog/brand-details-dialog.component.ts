import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: 'brand-details-dialog.component.html',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@Component({
  selector: 'dialog-content',
  standalone: true,
  templateUrl: 'brand-details-dialog.component.html',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
  ],
})
export class AppDialogContentComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { nombreMarca: string; descripcionMarca: string }) {}
  }
