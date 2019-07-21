import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrPage } from './registerr.page';

describe('RegisterrPage', () => {
  let component: RegisterrPage;
  let fixture: ComponentFixture<RegisterrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
