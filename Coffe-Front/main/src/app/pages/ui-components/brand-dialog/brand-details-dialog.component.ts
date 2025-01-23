import {Component, ChangeDetectionStrategy} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
MatDialog,
MatDialogRef,
MatDialogActions,
MatDialogClose,
MatDialogTitle,
MatDialogContent,
MatDialogModule,
} from '@angular/material/dialog';
/**
* @title chips overview
*/
@Component({
selector: 'app-dialog',
templateUrl: 'dialog.component.html',
imports: [
MatButtonModule,
MatDialogActions,
MatDialogClose,
MatDialogTitle,
MatDialogContent,
MatDialogModule,
],
changeDetection: ChangeDetectionStrategy.OnPush
})
/**
* @title 2 Dialog with header, scrollable content and actions
*/
@Component({
selector: 'dialog-content',
imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
templateUrl: 'dialog-content.component.html'
})
export class AppDialogContentComponent {}
export class AppDialogComponent {
constructor(private dialog: MatDialog) {}

// 2
openHeaderDialog() {
const dialogRef = this.dialog.open(AppDialogContentComponent);
dialogRef.afterClosed().subscribe((result) => {
console.log('Dialog result: result');
});
}
}