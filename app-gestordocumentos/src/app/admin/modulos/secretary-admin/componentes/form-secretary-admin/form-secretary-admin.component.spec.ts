import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecretaryAdminComponent } from './form-secretary-admin.component';

describe('FormSecretaryAdminComponent', () => {
  let component: FormSecretaryAdminComponent;
  let fixture: ComponentFixture<FormSecretaryAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSecretaryAdminComponent]
    });
    fixture = TestBed.createComponent(FormSecretaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
