import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private TOKEN_KEY = 'user-token';
  private ROLE_KEY = 'user-role';

  constructor() { }


  public saveRole(role: string): void {
    window.sessionStorage.removeItem(this.ROLE_KEY);
    window.sessionStorage.setItem(this.ROLE_KEY, role);
  }
  
  public getRole(): string | null {
    return window.sessionStorage.getItem(this.ROLE_KEY);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }
}