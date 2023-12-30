import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabManageAdminComponent } from './tab-manage-admin.component';

describe('TabManageAdminComponent', () => {
  let component: TabManageAdminComponent;
  let fixture: ComponentFixture<TabManageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabManageAdminComponent]
    });
    fixture = TestBed.createComponent(TabManageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
