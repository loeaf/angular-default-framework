import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLogoComponent } from './line-logo.component';

describe('LineLogoComponent', () => {
  let component: LineLogoComponent;
  let fixture: ComponentFixture<LineLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineLogoComponent]
    });
    fixture = TestBed.createComponent(LineLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
