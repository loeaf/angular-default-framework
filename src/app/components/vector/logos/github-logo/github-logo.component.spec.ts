import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLogoComponent } from './github-logo.component';

describe('GithubLogoComponent', () => {
  let component: GithubLogoComponent;
  let fixture: ComponentFixture<GithubLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubLogoComponent]
    });
    fixture = TestBed.createComponent(GithubLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
