import { Component, signal } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthPopupComponent } from '../../auth-popup/auth-popup';
import { MenuModule } from 'primeng/menu';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-actions',
  imports: [MenuModule, RouterLink],
  standalone: true,
  templateUrl: './user-actions.html',
  styleUrls: ['./user-actions.scss', '../header.scss'],
  providers: [DialogService, MessageService],
})
export class UserActionsComponent {
  ref: DynamicDialogRef | undefined;
  menuItems: MenuItem[] | undefined;
  isAuthorized = signal(false);

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private router: Router
  ) {}

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

    this.ref.onClose.subscribe((authStatus) => this.isAuthorized.set(authStatus));
  }

  logout() {
    this.isAuthorized.set(false);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Профиль',
        icon: 'pi pi-user',
        routerLink: ['/profile'],
      },
      {
        label: 'Мои объявления',
        icon: 'pi pi-table',
        routerLink: ['/my-ads'],
      },
      {
        label: 'Выйти',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }
}
