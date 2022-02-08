import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlibabaLogoComponent } from './alibaba-logo.component';

describe('AlibabaLogoComponent', () => {
  let component: AlibabaLogoComponent;
  let fixture: ComponentFixture<AlibabaLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlibabaLogoComponent]
    });
    fixture = TestBed.createComponent(AlibabaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
