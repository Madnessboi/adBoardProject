import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../models/ads.model';
import { AdvertisementRequest } from '../models/ad-request.model';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private apiUrl = `${environment.apiUrl}/api/advertisements`;

  constructor(private http: HttpClient) {}

  getAdvertisements(request: AdvertisementRequest): Observable<Advertisement[]> {
    return this.http.post<Advertisement[]>(`${environment.apiUrl}/Advert/search`, request);
  }

  getAdvertisementById(id: string): Observable<Advertisement> {
    return this.http.get<Advertisement>(`${environment.apiUrl}/Advert/${id}`);
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
  }
}
