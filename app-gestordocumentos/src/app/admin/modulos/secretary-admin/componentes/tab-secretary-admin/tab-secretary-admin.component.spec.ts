import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSecretaryAdminComponent } from './tab-secretary-admin.component';

describe('TabSecretaryAdminComponent', () => {
  let component: TabSecretaryAdminComponent;
  let fixture: ComponentFixture<TabSecretaryAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSecretaryAdminComponent]
    });
    fixture = TestBed.createComponent(TabSecretaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
