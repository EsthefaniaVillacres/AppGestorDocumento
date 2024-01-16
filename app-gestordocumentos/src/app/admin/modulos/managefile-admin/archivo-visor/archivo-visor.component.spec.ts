import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoVisorComponent } from './archivo-visor.component';

describe('ArchivoVisorComponent', () => {
  let component: ArchivoVisorComponent;
  let fixture: ComponentFixture<ArchivoVisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoVisorComponent]
    });
    fixture = TestBed.createComponent(ArchivoVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
