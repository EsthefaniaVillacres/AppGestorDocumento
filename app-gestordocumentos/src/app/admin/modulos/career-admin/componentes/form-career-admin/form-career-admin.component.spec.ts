import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCareerAdminComponent } from './form-career-admin.component';

describe('FormCareerAdminComponent', () => {
  let component: FormCareerAdminComponent;
  let fixture: ComponentFixture<FormCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCareerAdminComponent]
    });
    fixture = TestBed.createComponent(FormCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
