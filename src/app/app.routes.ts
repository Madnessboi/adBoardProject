import { Routes } from '@angular/router';
import { RecommendationsListComponent } from './components/recommendations-list/recommendations-list';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/recommendations-list/recommendations-list').then(
        (m) => m.RecommendationsListComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile').then((m) => m.ProfileComponent),
    // canActivate: [authGuard],
  },
  {
    path: 'my-ads',
    loadComponent: () => import('./components/my-ads/my-ads').then((m) => m.MyAdsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'advertisement/:id',
    loadComponent: () =>
      import('./components/advertisement-item/advertisement-item').then(
        (m) => m.AdvertisementItemComponent
      ),
  },
];
