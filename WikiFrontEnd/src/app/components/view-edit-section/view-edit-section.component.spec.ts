import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSectionComponent } from './view-edit-section.component';

describe('ViewEditSectionComponent', () => {
  let component: ViewEditSectionComponent;
  let fixture: ComponentFixture<ViewEditSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
