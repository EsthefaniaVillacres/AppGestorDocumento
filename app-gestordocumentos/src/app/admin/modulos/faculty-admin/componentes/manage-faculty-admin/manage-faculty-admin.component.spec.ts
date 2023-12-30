import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFacultyAdminComponent } from './manage-faculty-admin.component';

describe('ManageFacultyAdminComponent', () => {
  let component: ManageFacultyAdminComponent;
  let fixture: ComponentFixture<ManageFacultyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFacultyAdminComponent]
    });
    fixture = TestBed.createComponent(ManageFacultyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
