import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagUserAdminComponent } from './pag-user-admin.component';

describe('PagUserAdminComponent', () => {
  let component: PagUserAdminComponent;
  let fixture: ComponentFixture<PagUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagUserAdminComponent]
    });
    fixture = TestBed.createComponent(PagUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
