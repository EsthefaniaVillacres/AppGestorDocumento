import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentAdminComponent } from './form-student-admin.component';

describe('FormStudentAdminComponent', () => {
  let component: FormStudentAdminComponent;
  let fixture: ComponentFixture<FormStudentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStudentAdminComponent]
    });
    fixture = TestBed.createComponent(FormStudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
