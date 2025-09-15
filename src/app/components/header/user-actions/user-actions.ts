import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthPopupComponent } from '../../auth-popup/auth-popup';

@Component({
  selector: 'app-user-actions',
  imports: [],
  standalone: true,
  templateUrl: './user-actions.html',
  styleUrls: ['./user-actions.scss', '../header.scss'],
  providers: [DialogService, MessageService],
})
export class UserActionsComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  show() {
    this.ref = this.dialogService.open(AuthPopupComponent, {
      showHeader: true,
      header: 'Авторизация',
      width: '100%',
      style: {
        'max-width': '416px',
      },
      modal: true,
      dismissableMask: true,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closable: true,
    });
  }
}
