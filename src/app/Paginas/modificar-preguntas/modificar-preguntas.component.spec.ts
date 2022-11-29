import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPreguntasComponent } from './modificar-preguntas.component';

describe('ModificarPreguntasComponent', () => {
  let component: ModificarPreguntasComponent;
  let fixture: ComponentFixture<ModificarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
