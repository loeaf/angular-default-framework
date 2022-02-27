import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppLogoComponent } from './whats-app-logo.component';

describe('WhatsAppLogoComponent', () => {
  let component: WhatsAppLogoComponent;
  let fixture: ComponentFixture<WhatsAppLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppLogoComponent]
    });
    fixture = TestBed.createComponent(WhatsAppLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
