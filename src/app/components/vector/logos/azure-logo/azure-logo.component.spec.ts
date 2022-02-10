import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureLogoComponent } from './azure-logo.component';

describe('AzureLogoComponent', () => {
  let component: AzureLogoComponent;
  let fixture: ComponentFixture<AzureLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzureLogoComponent]
    });
    fixture = TestBed.createComponent(AzureLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
