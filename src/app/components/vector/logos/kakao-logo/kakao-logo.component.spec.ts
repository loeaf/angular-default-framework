import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoLogoComponent } from './kakao-logo.component';

describe('KakaoLogoComponent', () => {
  let component: KakaoLogoComponent;
  let fixture: ComponentFixture<KakaoLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KakaoLogoComponent]
    });
    fixture = TestBed.createComponent(KakaoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
