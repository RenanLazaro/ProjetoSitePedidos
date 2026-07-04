import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  isRegistering = false;

  loginCompanyName = '';
  loginUsername = '';
  loginPassword = '';

  showLoginPassword = false;
  isProcessing = false;

  error = '';
  successMsg = '';
}