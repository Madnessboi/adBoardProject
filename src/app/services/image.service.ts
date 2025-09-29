import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageById(id: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Images/${id}`, {
      responseType: 'blob',
    });
  }
}
