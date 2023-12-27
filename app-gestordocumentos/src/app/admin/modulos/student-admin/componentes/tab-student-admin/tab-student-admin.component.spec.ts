import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStudentAdminComponent } from './tab-student-admin.component';

describe('TabStudentAdminComponent', () => {
  let component: TabStudentAdminComponent;
  let fixture: ComponentFixture<TabStudentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabStudentAdminComponent]
    });
    fixture = TestBed.createComponent(TabStudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
