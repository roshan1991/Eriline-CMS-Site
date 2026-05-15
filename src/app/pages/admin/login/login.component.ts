import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error = '';
  
  showResetForm = false;
  resetUsername = '';
  resetError = '';
  resetMessage = '';
  isResetting = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: (err) => this.error = 'Invalid username or password'
    });
  }

  onReset() {
    if (!this.resetUsername) return;
    this.isResetting = true;
    this.resetError = '';
    this.resetMessage = '';

    this.auth.resetPassword(this.resetUsername).subscribe({
      next: (res) => {
        this.isResetting = false;
        this.resetMessage = res.message || 'Password reset instructions sent.';
        this.resetUsername = '';
      },
      error: (err) => {
        this.isResetting = false;
        this.resetError = err.error?.message || 'Failed to reset password.';
      }
    });
  }
}
