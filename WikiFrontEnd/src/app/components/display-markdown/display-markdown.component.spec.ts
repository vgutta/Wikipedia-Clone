import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMarkdownComponent } from './display-markdown.component';

describe('DisplayMarkdownComponent', () => {
  let component: DisplayMarkdownComponent;
  let fixture: ComponentFixture<DisplayMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
