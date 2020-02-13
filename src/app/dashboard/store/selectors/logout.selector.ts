import { createFeatureSelector, createSelector } from '@ngrx/store';

const authFeature = createFeatureSelector('auth');

export const logoutSelector = createSelector(
  authFeature,
  (state: any) => state.login
);
