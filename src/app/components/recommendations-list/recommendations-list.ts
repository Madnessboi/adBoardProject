import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Advertisement } from '../../models/ads.model';
import { AdvertisementService } from '../../services/ads.service';
import { Observable, tap } from 'rxjs';
import { LazyImageDirective } from '../../directives/lazy-image.directive';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-recommendations-list',
  imports: [RouterLink, AsyncPipe, LazyImageDirective],
  templateUrl: './recommendations-list.html',
  styleUrls: ['./recommendations-list.scss', '../../app.scss'],
})
export class RecommendationsListComponent implements OnInit {
  private recommendationsService = inject(AdvertisementService);
  advertisements!: Observable<Advertisement[]>;

  ngOnInit(): void {
    this.advertisements = this.recommendationsService.getAdvertisements({
      search: '',
      showNonActive: true,
    });
  }

  formatPrice(price: number): string {
    return this.recommendationsService.formatPrice(price);
  }
}
