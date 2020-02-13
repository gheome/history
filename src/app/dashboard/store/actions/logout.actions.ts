import { Action } from '@ngrx/store';
import { Data } from '../../../auth/store/models/data.model';

export enum LogoutActionTypes {
  LOGOUT_ACTION = '[Logout] Logout'
}

export class LogoutAction implements Action {
  readonly type = LogoutActionTypes.LOGOUT_ACTION;
}

export type LogoutActions = LogoutAction;
