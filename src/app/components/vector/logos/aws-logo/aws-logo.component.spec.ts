import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsLogoComponent } from './aws-logo.component';

describe('AwsLogoComponent', () => {
  let component: AwsLogoComponent;
  let fixture: ComponentFixture<AwsLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsLogoComponent]
    });
    fixture = TestBed.createComponent(AwsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
