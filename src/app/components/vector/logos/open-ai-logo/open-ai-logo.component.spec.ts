import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiLogoComponent } from './open-ai-logo.component';

describe('OpenAiLogoComponent', () => {
  let component: OpenAiLogoComponent;
  let fixture: ComponentFixture<OpenAiLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAiLogoComponent]
    });
    fixture = TestBed.createComponent(OpenAiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
