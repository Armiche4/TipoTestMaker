import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAsignaturasComponent } from './modificar-asignaturas.component';

describe('ModificarAsignaturasComponent', () => {
  let component: ModificarAsignaturasComponent;
  let fixture: ComponentFixture<ModificarAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
