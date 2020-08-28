import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheDetailComponent } from './clothe-detail.component';

describe('ClotheDetailComponent', () => {
  let component: ClotheDetailComponent;
  let fixture: ComponentFixture<ClotheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClotheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
