import { Action } from '@ngrx/store';
import { LoginState, LoginPayload } from '../models/login.model';

export enum LoginActionTypes {
  LOGIN_REQUEST_ACTION = '[Login] Login Request Action',
  LOGIN_SUCCESS_USER_ACTION = '[Login] Login succes as user',
  LOGIN_SUCCESS_ADMIN_ACTION = '[Login] Login success as admin',
  LOGIN_ERROR_ACTION = '[Login] Login error',
  LOGIN_AS_USER = '[Login] Login as user',
  LOGOUT_ACTION = '[Logout] Logout'
}

export class LoginRequestAction implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST_ACTION;
  constructor(public payload: LoginPayload) { }
}

export class LoginSuccesAsUserAction implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS_USER_ACTION;
  constructor(public payload: LoginState) { }
}

export class LoginSuccesAsAdminAction implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS_ADMIN_ACTION;
  constructor(public payload: LoginPayload) { }
}

export class LoginAsUserAction implements Action {
  readonly type = LoginActionTypes.LOGIN_AS_USER;
  constructor(public payload: LoginPayload) { }
}

export class LoginErrorAction implements Action {
  readonly type = LoginActionTypes.LOGIN_ERROR_ACTION;
  constructor(public payload: LoginState) { }
}

export class LogoutAction implements Action {
  readonly type = LoginActionTypes.LOGOUT_ACTION;
}

export type LoginAction =
  LoginRequestAction |
  LoginSuccesAsUserAction |
  LoginSuccesAsAdminAction |
  LoginErrorAction |
  LoginAsUserAction |
  LogoutAction;
