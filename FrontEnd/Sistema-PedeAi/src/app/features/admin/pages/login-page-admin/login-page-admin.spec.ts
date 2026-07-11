import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageAdmin } from './login-page-admin';

describe('LoginPageAdmin', () => {
  let component: LoginPageAdmin;
  let fixture: ComponentFixture<LoginPageAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
