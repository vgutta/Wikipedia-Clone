import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { UDPage } from '../../models/ud-pages';
import { Page } from '../../models/ud-pages';
import { Test } from '../../models/ud-pages';
import { UdPagesService } from '../../services/ud-pages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  //udPage$: Observable<UDPage>;
  page$: Observable<Page>;
  testPage$: Observable<Test>;
  constructor(
    private udPageService: UdPagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page$ = this.udPageService.getAllPages();
    //this.testPage$ = this.udPageService.getTestPages();
  }

}
