import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalAdminComponent } from './pag-principal-admin.component';

describe('PagPrincipalAdminComponent', () => {
  let component: PagPrincipalAdminComponent;
  let fixture: ComponentFixture<PagPrincipalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagPrincipalAdminComponent]
    });
    fixture = TestBed.createComponent(PagPrincipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
