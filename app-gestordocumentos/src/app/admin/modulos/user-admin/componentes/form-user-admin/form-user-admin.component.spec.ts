import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserAdminComponent } from './form-user-admin.component';

describe('FormUserAdminComponent', () => {
  let component: FormUserAdminComponent;
  let fixture: ComponentFixture<FormUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserAdminComponent]
    });
    fixture = TestBed.createComponent(FormUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
