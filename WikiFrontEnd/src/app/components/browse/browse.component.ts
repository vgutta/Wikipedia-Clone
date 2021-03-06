import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models/ud-pages';
import { UdPagesService } from '../../services/ud-pages.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  myControl = new FormControl();
  page$: Observable<Page[]>;
  options: Array<String>;
  constructor(
    private udPageService: UdPagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page$ = this.udPageService.getAllPages();
    this.options = ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }

}
