import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminEmpresaService } from '../services/admin-empresa';

@Component({
  selector: 'app-admin-cadastro-empresa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin-cadastro-empresa.html',
  styleUrl: './admin-cadastro-empresa.scss',
})
export class AdminCadastroEmpresa {
  private fb = inject(FormBuilder);
  public service = inject(AdminEmpresaService);

  empresaForm: FormGroup = this.fb.group({
    tipoDoc: ['cnpj'],
    documento: ['', Validators.required],
    nome: ['', Validators.required],
    mensalidade: ['', Validators.required],
    dataVencimento: ['', Validators.required],
    cobrancaAutomatica: [false],
    mensagemCobranca: [''],
    celular: ['', Validators.required]
  });

  buscarDoc() {
    const doc = this.empresaForm.get('documento')?.value.replace(/\D/g, '');
    if (!doc) return;
    this.service.buscarDadosCnpj(doc).subscribe((res: any) => {
      this.empresaForm.patchValue({ nome: res.razao_social });
    });
  }

  formatarTelefone(event: any) {
    let v = event.target.value.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    this.empresaForm.patchValue({ celular: v }, { emitEvent: false });
  }

  formatarMoeda(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',');
    this.empresaForm.patchValue({ mensalidade: `R$ ${valor}` }, { emitEvent: false });
  }

  onSubmit() {
    if (this.empresaForm.invalid) return;
    const form = this.empresaForm.value;
    const [ano, mes, dia] = form.dataVencimento.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;
    const hoje = new Date().toISOString().split('T')[0];

    const mensagemCompleta = `*RESUMO DA COBRANÇA*\n---------------------------\n📄 *Documento:* ${form.documento}\n🏢 *Empresa:* ${form.nome}\n💰 *Mensalidade:* ${form.mensalidade}\n📅 *Vencimento:* ${dataFormatada}\n\n*Mensagem:*\n"${form.mensagemCobranca}"`;

    if (form.cobrancaAutomatica && form.dataVencimento === hoje) {
      const telLimpo = form.celular.replace(/\D/g, '');
      window.open(`https://api.whatsapp.com/send?phone=55${telLimpo}&text=${encodeURIComponent(mensagemCompleta)}`, '_blank');
    }
    alert('Cadastro salvo com sucesso!');
  }
}