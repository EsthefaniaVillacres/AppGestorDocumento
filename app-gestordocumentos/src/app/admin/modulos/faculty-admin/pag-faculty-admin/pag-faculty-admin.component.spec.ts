import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFacultyAdminComponent } from './pag-faculty-admin.component';

describe('PagFacultyAdminComponent', () => {
  let component: PagFacultyAdminComponent;
  let fixture: ComponentFixture<PagFacultyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagFacultyAdminComponent]
    });
    fixture = TestBed.createComponent(PagFacultyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
