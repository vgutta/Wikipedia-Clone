import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Page } from '../models/ud-pages';
import { UdPagesService } from '../services/ud-pages.service';
import { Observable } from 'rxjs';

@Injectable()
export class RetrievePageResolve implements Resolve<Page> {

  constructor(private pageService: UdPagesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page> {
    return this.pageService.getPage(route.params['pageName']);
  }
}