import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizePersonComponent } from './authorize-person.component';

describe('AuthorizePersonComponent', () => {
  let component: AuthorizePersonComponent;
  let fixture: ComponentFixture<AuthorizePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
