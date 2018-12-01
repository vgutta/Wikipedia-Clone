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
    return of({
      'name': 'test-page',
      'sections': [
        {
          'title': 'Intro',
          'content': 'Here is *one star*, **two stars** and ***three stars***, and a backslashed \\*'
        },
        {
          'title': 'Another Section',
          'content': '<p>Here\'s another section.</p>'
        },
        {
          'title': 'Yet another',
          'content': '<p>And another.</p>'
        },
        {
          'title': 'The Fourth',
          'content': '<p>A fourth section!</p>'
        }
      ]
    });
//    return this.http.get<Page>(`http://localhost:3542/api/pages/${pageName}`);
  }

}
