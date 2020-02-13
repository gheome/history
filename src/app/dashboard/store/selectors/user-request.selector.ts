import { createFeatureSelector, createSelector } from '@ngrx/store';

const usersFeature = createFeatureSelector('dashboard');

const userRequestSelector = createSelector(
  usersFeature,
  (state: any) => state.userRequest
);

export const userRequestDataSelector = createSelector(
  userRequestSelector,
  (state: any) => state.data
);
