import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFacultyAdminComponent } from './tab-faculty-admin.component';

describe('TabFacultyAdminComponent', () => {
  let component: TabFacultyAdminComponent;
  let fixture: ComponentFixture<TabFacultyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabFacultyAdminComponent]
    });
    fixture = TestBed.createComponent(TabFacultyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
