import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { UDPage } from '../models/ud-pages';
import { Page } from '../models/ud-pages';
import { Test } from '../models/ud-pages';

@Injectable({
  providedIn: 'root'
})
export class UdPagesService {

  constructor(private http: HttpClient) { }

  getAllPages(): Observable<Page> {
    return this.http.get<Page>('http://localhost:3542/api/pages/b');
  }
  getTestPages(): Observable<Test> {
    return this.http.get<Test>('http://localhost:3542/');
  }

  getPage(pageName: string): Observable<Page> {
    return this.http.get<Page>(`http://localhost:3542/api/pages/${pageName}`);
  }

}
