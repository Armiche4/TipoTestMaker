import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPreguntasComponent } from './anadir-preguntas.component';

describe('AnadirPreguntasComponent', () => {
  let component: AnadirPreguntasComponent;
  let fixture: ComponentFixture<AnadirPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirPreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
