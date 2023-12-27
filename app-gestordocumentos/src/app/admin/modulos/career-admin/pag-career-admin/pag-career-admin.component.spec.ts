import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCareerAdminComponent } from './pag-career-admin.component';

describe('PagCareerAdminComponent', () => {
  let component: PagCareerAdminComponent;
  let fixture: ComponentFixture<PagCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCareerAdminComponent]
    });
    fixture = TestBed.createComponent(PagCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
