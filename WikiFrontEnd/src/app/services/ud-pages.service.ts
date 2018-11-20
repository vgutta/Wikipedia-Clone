import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UDPage } from '../models/ud-pages';
@Injectable({
  providedIn: 'root'
})
export class UdPagesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<UDPage> {
    return this.http.get<UDPage>('https://en.wikipedia.org/w/api.php?action=opensearch&search=University%20of%20Delaware&format=json');
  }
}
