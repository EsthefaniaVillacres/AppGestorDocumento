import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSecretaryAdminComponent } from './manage-secretary-admin.component';

describe('ManageSecretaryAdminComponent', () => {
  let component: ManageSecretaryAdminComponent;
  let fixture: ComponentFixture<ManageSecretaryAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSecretaryAdminComponent]
    });
    fixture = TestBed.createComponent(ManageSecretaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
