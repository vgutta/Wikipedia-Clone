import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { UDPage } from '../models/ud-pages';
import { Page } from '../models/ud-pages';
import { Test } from '../models/ud-pages';

@Injectable({
  providedIn: 'root'
})
export class UdPagesService {

  constructor(private http: HttpClient) { }

  // getData(): Observable<UDPage> {
  //   return this.http.get<UDPage>('https://en.wikipedia.org/w/api.php?action=opensearch&search=University%20of%20Delaware&format=json');
  //   return this.http.get<UDPage>('https://localhost:3542');
  // }

  getAllPages(): Observable<Page> {
    return this.http.get<Page>('http://localhost:3542/api/pages/b');
  }
  getTestPages(): Observable<Test> {
    return this.http.get<Test>('http://localhost:3542/');
  }

}
