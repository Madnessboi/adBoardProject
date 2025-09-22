import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-auth-popup',
  imports: [InputTextModule, ButtonModule, CheckboxModule],
  templateUrl: './auth-popup.html',
  styleUrls: ['./auth-popup.scss'],
})
export class AuthPopupComponent {
  private dialogRef = inject(DynamicDialogRef);
  login() {
    this.dialogRef.close(true);
  }
}
