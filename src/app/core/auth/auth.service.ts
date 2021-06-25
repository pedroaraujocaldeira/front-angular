import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, mapTo, take, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly CLIENT = 'USER';

  constructor(private http: HttpClient, private router: Router) {
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  getJwtToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public login(user: { cpf: string; password: string }): Observable<boolean> {
    return this.http
      .post<any>(`${environment.ApiUrl}auth/login`, user)
      .pipe(
        tap((user: any) =>
        this.storeUserAndToken(user)
        ),
        mapTo(true),
        catchError(() => {
          return of(false);
        })
      );
  }

  private storeUserAndToken(user: any): void {
    localStorage.setItem(this.CLIENT, JSON.stringify(user.user));
    localStorage.setItem(this.JWT_TOKEN, user.tokens.access.token);
    localStorage.setItem(this.REFRESH_TOKEN, user.tokens.refresh.token);
  }

  private storeToken(user: any): void {
    localStorage.setItem(this.JWT_TOKEN, user.access.token);
  }

  public logout(): Observable<any> {
    return this.http
      .post<any>(`${environment.ApiUrl}auth/logout`, {
        refreshToken: this.getRefreshToken()
      })
      .pipe(
        tap(() => this.removeUser()),
        mapTo(true),
        catchError(() => {
          this.removeUser();
          return of(true);
        })
      );
  }

  public removeUser(): void {
    localStorage.removeItem(this.CLIENT);
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    this.router.navigate(['login']);

  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  refreshToken(): Observable<any> {
    return this.http
      .post<any>(`${environment.ApiUrl}auth/refresh-tokens`, {
        refreshToken: this.getRefreshToken()
      })
      .pipe(
        tap((tokens: any) => {
          this.storeToken(tokens);
        })
      );
  }
}

