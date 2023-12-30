import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSecretaryAdminComponent } from './pag-secretary-admin.component';

describe('PagSecretaryAdminComponent', () => {
  let component: PagSecretaryAdminComponent;
  let fixture: ComponentFixture<PagSecretaryAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagSecretaryAdminComponent]
    });
    fixture = TestBed.createComponent(PagSecretaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
