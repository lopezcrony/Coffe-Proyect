import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  templateUrl: 'brand-details-dialog.component.html',
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogContentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { nombreMarca: string; descripcionMarca: string }
  ) {}
}
