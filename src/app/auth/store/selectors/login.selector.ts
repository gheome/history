import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../models/login.model';
import { AuthState } from '../models/auth.model';
import { RegisterState } from '../models/register.model';

const authFeature = createFeatureSelector('auth');

const loginSelector = createSelector(
  authFeature,
  (state: AuthState) => state.login
);

export const loginRequestSelector = createSelector(
  loginSelector,
  (state: LoginState) => state.request
);

export const loginDataSelector = createSelector(
  loginSelector,
  (state: LoginState) => state.data
);

const registerSelector = createSelector(
  authFeature,
  (state: AuthState) => state.register
);

export const registerDataSelector = createSelector(
  registerSelector,
  (state: RegisterState) => state.data
);
