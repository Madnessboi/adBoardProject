import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AdvertisementService } from '../../services/ads.service';
import { Advertisement } from '../../models/ads.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-advertisement-item',
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './advertisement-item.html',
  styleUrl: './advertisement-item.scss',
})
export class AdvertisementItemComponent implements OnInit {
  private adsService = inject(AdvertisementService);
  private route = inject(ActivatedRoute);

  advertisement$!: Observable<Advertisement>;

  ngOnInit(): void {
    this.advertisement$ = this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        return this.adsService.getAdvertisementById(id);
      })
    );
  }

  formatPrice(price: number): string {
    return this.adsService.formatPrice(price);
  }
}
