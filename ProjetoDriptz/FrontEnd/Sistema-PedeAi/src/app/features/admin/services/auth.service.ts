import { Injectable } from '@angular/core';
import {LoginRequest} from "../models/login-request.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // aqui é o metodo de login que recebe O objeto do tipo loginRequest, (empresa, usuario e senha)
  /* 
  Exemplo: 
  {
  empresa: 'nome da empresa',
  usuario: 'nome do usuario',
  senha: 'senha do usuario'
  }
  */
  login(dados: LoginRequest): void {
    console.log('Dados recebido pelo serviço de autenticação:', dados);
  }

}