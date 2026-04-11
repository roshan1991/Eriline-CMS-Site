import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  currentUser = signal<string | null>(localStorage.getItem('username'));

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        this.currentUser.set(res.username);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.currentUser.set(null);
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
