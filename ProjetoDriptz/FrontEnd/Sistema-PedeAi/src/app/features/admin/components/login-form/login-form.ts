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

  modalAberto = false;
  tituloModal = '';
  mensagemModal = '';

  logar(){
if ( 
  !this.empresa.trim() || 
  !this.usuario.trim() || 
  !this.senha.trim() ) { 
    
    this.tituloModal = 'Campos obrigatórios'; 
    this.mensagemModal = 'Preencha todos os campos antes de continuar.'; 
    this.modalAberto = true; 
    return; } 
    
    console.log('Login realizado.'); }
}