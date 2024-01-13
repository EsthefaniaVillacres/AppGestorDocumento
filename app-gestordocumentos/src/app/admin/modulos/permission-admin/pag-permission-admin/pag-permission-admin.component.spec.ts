import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPermissionAdminComponent } from './pag-permission-admin.component';

describe('PagPermissionAdminComponent', () => {
  let component: PagPermissionAdminComponent;
  let fixture: ComponentFixture<PagPermissionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagPermissionAdminComponent]
    });
    fixture = TestBed.createComponent(PagPermissionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
