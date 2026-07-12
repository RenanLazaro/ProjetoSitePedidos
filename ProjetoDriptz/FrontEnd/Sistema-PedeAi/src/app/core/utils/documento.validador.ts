import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DocumentoValidator {
  static validar(control: AbstractControl): ValidationErrors | null {
    const valor = control.value?.replace(/\D/g, ''); // Remove máscara

    if (!valor) return null;

    if (valor.length === 11) {
      return validarCPF(valor) ? null : { cpfInvalido: true };
    } else if (valor.length === 14) {
      return validarCNPJ(valor) ? null : { cnpjInvalido: true };
    }

    return { documentoInvalido: true };
  }
}

// Funções auxiliares de cálculo matemático (omitidas aqui por brevidade, 
// mas existem algoritmos padrão para validar CPF/CNPJ)
function validarCPF(cpf: string): boolean { /* ... lógica de cálculo ... */ return true; }
function validarCNPJ(cnpj: string): boolean { /* ... lógica de cálculo ... */ return true; }