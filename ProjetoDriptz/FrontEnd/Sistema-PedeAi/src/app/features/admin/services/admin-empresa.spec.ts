import { TestBed } from '@angular/core/testing';

import { AdminEmpresa } from './admin-empresa';

describe('AdminEmpresa', () => {
  let service: AdminEmpresa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmpresa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
