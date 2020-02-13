import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect, act } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import { of, from } from 'rxjs';
import { mergeMap, map, catchError, tap, filter } from 'rxjs/operators';
import {
  LoginActionTypes,
  LoginRequestAction,
  LoginSuccesAsAdminAction,
  LoginAsUserAction,
  LoginSuccesAsUserAction
} from '../actions/login.actions';
import { LoginState, LoginPayload } from '../models/login.model';

@Injectable()
export class LoginEffects {
  @Effect()
  public checkAdminLogin$ =  this.actions$.pipe(
    ofType(LoginActionTypes.LOGIN_REQUEST_ACTION),
    mergeMap((action: LoginRequestAction) => this.authService.loginAsAdmin(action.payload).pipe(
      map((data: LoginPayload) => {
        return new LoginSuccesAsAdminAction(data);
      }),
      catchError((err) => {
        console.log(err);
        return of(new LoginAsUserAction(action.payload));
      })
    ))
  );

  @Effect()
  public checkUserLogin$ =  this.actions$.pipe(
    ofType(LoginActionTypes.LOGIN_AS_USER),
    mergeMap((action: LoginAsUserAction) => this.authService.loginAsUser(action.payload).pipe(
      map((credentials: LoginState) => {
        return new LoginSuccesAsUserAction(credentials);
      }),
      catchError((err) => {
        console.log(err);
        return of('Unable to login!');
      })
    ))
  );

 constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}
