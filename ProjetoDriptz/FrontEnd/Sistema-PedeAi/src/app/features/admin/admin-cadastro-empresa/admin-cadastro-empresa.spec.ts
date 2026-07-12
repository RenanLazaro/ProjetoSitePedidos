import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroEmpresa } from './admin-cadastro-empresa';

describe('AdminCadastroEmpresa', () => {
  let component: AdminCadastroEmpresa;
  let fixture: ComponentFixture<AdminCadastroEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadastroEmpresa],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCadastroEmpresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
