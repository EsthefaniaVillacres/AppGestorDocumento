import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFacultyAdminComponent } from './form-faculty-admin.component';

describe('FormFacultyAdminComponent', () => {
  let component: FormFacultyAdminComponent;
  let fixture: ComponentFixture<FormFacultyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFacultyAdminComponent]
    });
    fixture = TestBed.createComponent(FormFacultyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
