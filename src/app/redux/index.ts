import {authReducer, UserState} from './auth/auth.reducers';
import {getSelectors, routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {clothesReducer, ClothesState} from './clothes/clothes.reducers';
import {Params} from '@angular/router';

export interface AppState {
  authState: UserState;
  clothesState: ClothesState;
  router: RouterReducerState<any>;
}
export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  clothesState: clothesReducer,
  router: routerReducer
};

export const selectClotheState = (state: AppState) => state.clothesState;
export const selectUserState = (state: AppState) => state.authState;
export const selectRouter = createFeatureSelector<
  AppState,
  RouterReducerState<any>
  >('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = getSelectors(selectRouter);

export const selectClothes = createSelector(
  selectClotheState,
  (state: ClothesState) => state.clothes
);

export const getCurrentNavigatedClothe = createSelector(
  selectClotheState,
  selectRouteParams,
  (state: ClothesState, params: Params) => state.clothes.find(item => item._id === params.id)
);
