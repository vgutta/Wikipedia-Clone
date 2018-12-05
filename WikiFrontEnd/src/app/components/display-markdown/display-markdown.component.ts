import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-markdown',
  templateUrl: './display-markdown.component.html',
  styleUrls: ['./display-markdown.component.css']
})
export class DisplayMarkdownComponent implements OnChanges {
  @ViewChild('myDiv') theDiv: MarkdownComponent;
  @Input() data: string;

  constructor(private zone: NgZone, private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    this.makeRouterLinks();
  }

  private makeRouterLinks() {
    window.setTimeout(() => {
      const links = this.theDiv.element.nativeElement.getElementsByClassName('convert-link') as HTMLCollectionOf<HTMLAnchorElement>;
      const router = this.router;
      for (const link of Array.from(links)) {
        link.addEventListener('click', function(e) {
          router.navigate(['wiki', this.dataset.href]);
          e.preventDefault();
        });
      }
    });
  }

}
