import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';

@Component({
  selector: 'app-login-page-admin',
  standalone: true,
  imports: [LoginForm],
  templateUrl: './login-page-admin.html',
  styleUrl: './login-page-admin.scss'
})
export class LoginPageAdmin {}