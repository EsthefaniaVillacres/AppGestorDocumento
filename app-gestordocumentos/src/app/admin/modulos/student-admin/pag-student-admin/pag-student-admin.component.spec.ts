import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagStudentAdminComponent } from './pag-student-admin.component';

describe('PagStudentAdminComponent', () => {
  let component: PagStudentAdminComponent;
  let fixture: ComponentFixture<PagStudentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagStudentAdminComponent]
    });
    fixture = TestBed.createComponent(PagStudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
