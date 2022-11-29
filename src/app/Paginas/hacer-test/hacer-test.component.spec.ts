import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerTestComponent } from './hacer-test.component';

describe('HacerTestComponent', () => {
  let component: HacerTestComponent;
  let fixture: ComponentFixture<HacerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
