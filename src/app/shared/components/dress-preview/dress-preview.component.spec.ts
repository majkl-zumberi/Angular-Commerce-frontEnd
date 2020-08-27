import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressPreviewComponent } from './dress-preview.component';

describe('DressPreviewComponent', () => {
  let component: DressPreviewComponent;
  let fixture: ComponentFixture<DressPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
