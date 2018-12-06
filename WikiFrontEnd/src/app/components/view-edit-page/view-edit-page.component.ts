import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Section, Image } from 'src/app/models/ud-pages';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from 'src/app/models/ud-pages';
import { ViewEditSectionComponent } from '../view-edit-section/view-edit-section.component';
import { UdPagesService } from '../../services/ud-pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-edit-page',
  templateUrl: './view-edit-page.component.html',
  styleUrls: ['./view-edit-page.component.css']
})
export class ViewEditPageComponent implements OnInit {
  //@Input() section: Section;
  //current: Section;
  page: Observable<Page>;
  latest: Page;
  public isOpen = false;

  constructor(public router: Router, private route: ActivatedRoute, private pagesService: UdPagesService) { }

  ngOnInit() {
    this.page = this.route.data.pipe(map((x) => x.page ));

    this.page.pipe(
      tap(x => this.latest = x)
    ).subscribe();
  }

  sectionChanged(index: number, editor: ViewEditSectionComponent) {
    const newData: Page = {
      name: this.latest.name,
      sections: Array.from(this.latest.sections) // shallow clone
    };
    newData.sections[index] = {
      title: editor.current.title,
      content: editor.current.content
    };

    this.pagesService.updatePage(newData.name, newData)
      .subscribe(() => {
        editor.finishSave();
        this.latest.sections[index] = editor.current;
      });
  }

  deleteSection(index: number) {
    const newData: Page = {
      name: this.latest.name,
      sections: Array.from(this.latest.sections)
    };
    newData.sections.splice(index, 1);

    this.pagesService.updatePage(newData.name, newData)
      .subscribe(() => {
        this.latest.sections.splice(index, 1);
      });
  }

  addSection() {
    this.latest.sections.push(
      {title: '', content: ''}
    );
  }

  editTitle() {
    if(!this.isOpen){
      this.isOpen = true;
    } else{
      this.isOpen = false;
    }
  }

  submitTitle() {
    console.log(this.latest.name);
    const newData: Page = {
      name: "Purnell",
      sections: Array.from(this.latest.sections) // shallow clone
    };
    console.log("Starting to submit title");
    this.pagesService.updatePage(this.latest.name, newData).subscribe(
      () => {
        console.log("Name updated, reloading Page");
        this.router.navigate([`/wiki/${newData.name}`]);
      }
    );
  }
}
