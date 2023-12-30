import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserAdminComponent } from './manage-user-admin.component';

describe('ManageUserAdminComponent', () => {
  let component: ManageUserAdminComponent;
  let fixture: ComponentFixture<ManageUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUserAdminComponent]
    });
    fixture = TestBed.createComponent(ManageUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
