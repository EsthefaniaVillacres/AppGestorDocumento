import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabTemplateAdminComponent } from './cab-template-admin.component';

describe('CabTemplateAdminComponent', () => {
  let component: CabTemplateAdminComponent;
  let fixture: ComponentFixture<CabTemplateAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabTemplateAdminComponent]
    });
    fixture = TestBed.createComponent(CabTemplateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
