import { TestBed } from '@angular/core/testing';

import { ServicioqrService } from './servicioqr.service';

describe('ServicioqrService', () => {
  let service: ServicioqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
