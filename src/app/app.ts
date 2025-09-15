import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { RecommendationsListComponent } from './components/recommendations-list/recommendations-list';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RecommendationsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-project');
}
