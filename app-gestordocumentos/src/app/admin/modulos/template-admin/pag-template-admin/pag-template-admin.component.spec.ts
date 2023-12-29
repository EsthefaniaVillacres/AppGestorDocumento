import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTemplateAdminComponent } from './pag-template-admin.component';

describe('PagTemplateAdminComponent', () => {
  let component: PagTemplateAdminComponent;
  let fixture: ComponentFixture<PagTemplateAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagTemplateAdminComponent]
    });
    fixture = TestBed.createComponent(PagTemplateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
