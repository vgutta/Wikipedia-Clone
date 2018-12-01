import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from 'src/app/models/ud-pages';

@Component({
  selector: 'app-view-edit-page',
  templateUrl: './view-edit-page.component.html',
  styleUrls: ['./view-edit-page.component.css']
})
export class ViewEditPageComponent implements OnInit {
  page: Observable<Page>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.route.data.pipe(map((x) => x.page ));

    this.page.pipe(
      tap(console.log)
    ).subscribe();
  }

}
