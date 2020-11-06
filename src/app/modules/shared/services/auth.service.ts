import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(token: string): void{
    localStorage.setItem('token', token);
  }

  logout(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn(): boolean{
    return localStorage.getItem('token') != null;
  }

  getToken(): string{
    return localStorage.getItem('token');
  }
}
