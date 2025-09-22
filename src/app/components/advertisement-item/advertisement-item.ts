import { Component, inject, OnInit } from '@angular/core';
import {
  mockRecommendations,
  RecommendationItem,
} from '../recommendations-list/recommendations-list.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertisement-item',
  imports: [CommonModule],
  templateUrl: './advertisement-item.html',
  styleUrl: './advertisement-item.scss',
})
export class AdvertisementItemComponent implements OnInit {
  recommendations: RecommendationItem[] = mockRecommendations;
  item: RecommendationItem | undefined;
  public route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.item = this.recommendations.find((rec) => rec.id === id);
      if (!this.item) {
        console.error('Ничего не найдено');
      }
    });
  }
}
