import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetTemplateAdminComponent } from './det-template-admin.component';

describe('DetTemplateAdminComponent', () => {
  let component: DetTemplateAdminComponent;
  let fixture: ComponentFixture<DetTemplateAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetTemplateAdminComponent]
    });
    fixture = TestBed.createComponent(DetTemplateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
