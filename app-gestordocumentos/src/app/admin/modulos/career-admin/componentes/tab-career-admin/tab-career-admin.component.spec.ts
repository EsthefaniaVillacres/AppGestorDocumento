import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCareerAdminComponent } from './tab-career-admin.component';

describe('TabCareerAdminComponent', () => {
  let component: TabCareerAdminComponent;
  let fixture: ComponentFixture<TabCareerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabCareerAdminComponent]
    });
    fixture = TestBed.createComponent(TabCareerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
