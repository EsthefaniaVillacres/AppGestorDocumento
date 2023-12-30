import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagManageAdminComponent } from './pag-manage-admin.component';

describe('PagManageAdminComponent', () => {
  let component: PagManageAdminComponent;
  let fixture: ComponentFixture<PagManageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagManageAdminComponent]
    });
    fixture = TestBed.createComponent(PagManageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
