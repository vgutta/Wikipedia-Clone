import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from 'src/app/models/ud-pages';
import { ViewEditSectionComponent } from '../view-edit-section/view-edit-section.component';
import { UdPagesService } from '../../services/ud-pages.service';

@Component({
  selector: 'app-view-edit-page',
  templateUrl: './view-edit-page.component.html',
  styleUrls: ['./view-edit-page.component.css']
})
export class ViewEditPageComponent implements OnInit {
  page: Observable<Page>;
  latest: Page;

  constructor(private route: ActivatedRoute, private pagesService: UdPagesService) { }

  ngOnInit() {
    this.page = this.route.data.pipe(map((x) => x.page ));

    this.page.pipe(
      tap(x => this.latest = x)
    ).subscribe();
  }

  sectionChanged(index: number, editor: ViewEditSectionComponent) {
    const newData: Page = Object.assign({}, this.latest); // Shallow clone page
    newData.sections = Array.from(newData.sections); // Shallow clone sections
    newData.sections[index] = editor.current;

    this.pagesService.updatePage(newData.name, newData)
      .subscribe(() => editor.finishSave());
  }

}
