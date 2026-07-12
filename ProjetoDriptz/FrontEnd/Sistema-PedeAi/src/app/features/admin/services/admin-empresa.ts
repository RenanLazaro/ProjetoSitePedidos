import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminEmpresaService {
  constructor(private http: HttpClient) {}

  buscarDadosCnpj(cnpj: string): Observable<any> {
    return this.http.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
  }

enviarWhatsApp(celular: string, mensagem: string): Observable<any> {
  // O link abaixo abre o WhatsApp Web/App com a mensagem pronta para envio
  // O número deve estar no formato 5527999999999
  const url = `https://api.whatsapp.com/send?phone=${celular}&text=${encodeURIComponent(mensagem)}`;
  
  // Abre em uma nova aba
  window.open(url, '_blank');
  
  return of({ success: true });
}
}