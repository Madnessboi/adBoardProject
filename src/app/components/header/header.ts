import { Component } from '@angular/core';
import { UserActionsComponent } from './user-actions/user-actions';
import { BoardHeadingComponent } from './board-heading/board-heading';

@Component({
  selector: 'app-header',
  imports: [UserActionsComponent, BoardHeadingComponent],
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {}
