import { Component } from '@angular/core';
import { mockRecommendations, RecommendationItem } from './recommendations-list.constants';

@Component({
  selector: 'app-recommendations-list',
  imports: [],
  templateUrl: './recommendations-list.html',
  styleUrls: ['./recommendations-list.scss', '../../app.scss'],
})
export class RecommendationsListComponent {
  recommendations: RecommendationItem[] = mockRecommendations;
}
