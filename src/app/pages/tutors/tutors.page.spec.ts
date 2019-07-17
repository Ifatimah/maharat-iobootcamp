import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsPage } from './tutors.page';

describe('TutorsPage', () => {
  let component: TutorsPage;
  let fixture: ComponentFixture<TutorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
