import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaLogoComponent } from './insta-logo.component';

describe('InstaLogoComponent', () => {
  let component: InstaLogoComponent;
  let fixture: ComponentFixture<InstaLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaLogoComponent]
    });
    fixture = TestBed.createComponent(InstaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
