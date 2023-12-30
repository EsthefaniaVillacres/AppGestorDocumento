import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManageAdminComponent } from './form-manage-admin.component';

describe('FormManageAdminComponent', () => {
  let component: FormManageAdminComponent;
  let fixture: ComponentFixture<FormManageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormManageAdminComponent]
    });
    fixture = TestBed.createComponent(FormManageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
