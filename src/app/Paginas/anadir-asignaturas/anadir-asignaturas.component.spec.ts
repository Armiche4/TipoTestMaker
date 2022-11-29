import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAsignaturasComponent } from './anadir-asignaturas.component';

describe('AnadirAsignaturasComponent', () => {
  let component: AnadirAsignaturasComponent;
  let fixture: ComponentFixture<AnadirAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
