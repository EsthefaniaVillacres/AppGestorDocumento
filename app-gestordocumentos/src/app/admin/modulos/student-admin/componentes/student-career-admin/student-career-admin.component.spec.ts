import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCareerAdminComponent } from './student-career-admin.component';

describe('StudentCareerAdminComponent', () => {
  let component: StudentCareerAdminComponent;
  let fixture: ComponentFixture<StudentCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCareerAdminComponent]
    });
    fixture = TestBed.createComponent(StudentCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
