import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSalonComponent } from './login-salon.component';

describe('LoginSalonComponent', () => {
  let component: LoginSalonComponent;
  let fixture: ComponentFixture<LoginSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
