import { createFeatureSelector, createSelector } from '@ngrx/store';

const dashboard = createFeatureSelector('dashboard');

const cats = createSelector(
  dashboard,
  (state: any) => state.cats
);

export const catsData = createSelector(
  cats,
  (state: any) => state.data
);

export const catsDataUrls = createSelector(
  catsData,
  (state: any) => state.urls
);
