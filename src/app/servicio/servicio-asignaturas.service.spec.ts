import { TestBed } from '@angular/core/testing';

import { ServicioAsignaturasService } from './servicio-asignaturas.service';

describe('ServicioAsignaturasService', () => {
  let service: ServicioAsignaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAsignaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
