import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExistingImageComponent } from './choose-existing-image.component';

describe('ChooseExistingImageComponent', () => {
  let component: ChooseExistingImageComponent;
  let fixture: ComponentFixture<ChooseExistingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseExistingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExistingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
