import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTogglerComponent } from './theme-toggler.component';

describe('ThemeTogglerComponent', () => {
  let component: ThemeTogglerComponent;
  let fixture: ComponentFixture<ThemeTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
