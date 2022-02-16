import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoIconComponent } from './kakao-icon.component';

describe('KakaoIconComponent', () => {
  let component: KakaoIconComponent;
  let fixture: ComponentFixture<KakaoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KakaoIconComponent]
    });
    fixture = TestBed.createComponent(KakaoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
