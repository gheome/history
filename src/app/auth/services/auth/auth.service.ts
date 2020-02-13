import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { LoginPayload } from '../../store/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = false;

  constructor(private http: HttpClient) { }

  public setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  public loginAsAdmin(payload: LoginPayload): Observable<any> {
    return this.http.get('assets/admin.json').pipe(
      mergeMap((data: any) => {
        const adminUser = data.find((admin: any) => (admin.email === payload.email && admin.password === payload.password));
        return adminUser ? of(adminUser) : throwError('Admin not found!');
      })
    );
  }

  public loginAsUser(data: LoginPayload): Observable<any> {
    let userPassword;
    if (JSON.parse(localStorage.getItem(data.email)).password) {
      userPassword = JSON.parse(localStorage.getItem(data.email)).password;
    }
    const approved = JSON.parse(localStorage.getItem(data.email)).approved;
    if (data.password === userPassword && approved && data.password) {
      return of(data) ? of(data) : throwError('User not found!');
    } else {
      throwError('User Not found!');
    }
  }
}
