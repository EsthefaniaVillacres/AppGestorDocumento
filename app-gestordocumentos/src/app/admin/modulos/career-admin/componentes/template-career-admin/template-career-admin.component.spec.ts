import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCareerAdminComponent } from './template-career-admin.component';

describe('TemplateCareerAdminComponent', () => {
  let component: TemplateCareerAdminComponent;
  let fixture: ComponentFixture<TemplateCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCareerAdminComponent]
    });
    fixture = TestBed.createComponent(TemplateCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
