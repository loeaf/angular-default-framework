import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaverLogoComponent } from './naver-logo.component';

describe('NaverLogoComponent', () => {
  let component: NaverLogoComponent;
  let fixture: ComponentFixture<NaverLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaverLogoComponent]
    });
    fixture = TestBed.createComponent(NaverLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
