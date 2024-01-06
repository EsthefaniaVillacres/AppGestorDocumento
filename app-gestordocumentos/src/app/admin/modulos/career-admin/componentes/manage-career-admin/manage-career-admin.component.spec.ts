import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCareerAdminComponent } from './manage-career-admin.component';

describe('ManageCareerAdminComponent', () => {
  let component: ManageCareerAdminComponent;
  let fixture: ComponentFixture<ManageCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCareerAdminComponent]
    });
    fixture = TestBed.createComponent(ManageCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
