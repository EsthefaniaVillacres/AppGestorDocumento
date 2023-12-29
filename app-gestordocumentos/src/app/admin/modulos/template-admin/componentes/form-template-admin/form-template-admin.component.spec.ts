import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateAdminComponent } from './form-template-admin.component';

describe('FormTemplateAdminComponent', () => {
  let component: FormTemplateAdminComponent;
  let fixture: ComponentFixture<FormTemplateAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTemplateAdminComponent]
    });
    fixture = TestBed.createComponent(FormTemplateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
