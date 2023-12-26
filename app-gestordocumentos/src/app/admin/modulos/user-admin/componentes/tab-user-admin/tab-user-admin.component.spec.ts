import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUserAdminComponent } from './tab-user-admin.component';

describe('TabUserAdminComponent', () => {
  let component: TabUserAdminComponent;
  let fixture: ComponentFixture<TabUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabUserAdminComponent]
    });
    fixture = TestBed.createComponent(TabUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
