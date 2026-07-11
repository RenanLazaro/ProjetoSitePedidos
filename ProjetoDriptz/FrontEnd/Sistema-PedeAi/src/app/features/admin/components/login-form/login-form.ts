import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Modal} from '../../../../shared/components/modal/modal';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    Modal],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {

  empresa = '';
  usuario = '';
  senha = '';

  carregando = false;

  modalAberto = false;
  tituloModal = '';
  mensagemModal = '';

  logar() {
    if(
      !this.empresa.trim() ||
      !this.usuario.trim() ||
      !this.senha.trim()
    ) {
      this.tituloModal = 'Campos obrigatórios';
      this.mensagemModal = 'Preencha todos os campos para continuar.';
      this.modalAberto = true;
      return;
    }

    this.carregando = true;

    setTimeout(() => {
      this.carregando = false;
      console.log('Login realizado com sucesso!');
    }, 2000);
  }
}