import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/ud-pages';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getListing(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:3542/api/images');
  }

  public uploadImage(contentType: string, data: ArrayBuffer): Observable<Image> {
    return this.http.post<Image>('http://localhost:3542/api/images', data, {
      headers: {
        contentType: contentType
      }
    });
  }
}
