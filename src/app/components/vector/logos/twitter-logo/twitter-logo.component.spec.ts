import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLogoComponent } from './twitter-logo.component';

describe('TwitterLogoComponent', () => {
  let component: TwitterLogoComponent;
  let fixture: ComponentFixture<TwitterLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterLogoComponent]
    });
    fixture = TestBed.createComponent(TwitterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
