import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagManagefileAdminComponent } from './pag-managefile-admin.component';

describe('PagManagefileAdminComponent', () => {
  let component: PagManagefileAdminComponent;
  let fixture: ComponentFixture<PagManagefileAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagManagefileAdminComponent]
    });
    fixture = TestBed.createComponent(PagManagefileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
