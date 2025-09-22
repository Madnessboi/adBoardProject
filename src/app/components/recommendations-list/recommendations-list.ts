import { Component, inject } from '@angular/core';
import { mockRecommendations, RecommendationItem } from './recommendations-list.constants';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-recommendations-list',
  imports: [RouterLink],
  templateUrl: './recommendations-list.html',
  styleUrls: ['./recommendations-list.scss', '../../app.scss'],
})
export class RecommendationsListComponent {
  recommendations: RecommendationItem[] = mockRecommendations;
  public router = inject(Router);
}
