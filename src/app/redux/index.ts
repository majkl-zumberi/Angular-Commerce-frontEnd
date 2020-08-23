import {authReducer, UserState} from './auth/auth.reducers';
import {getSelectors, routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AppState {
  authState: UserState;
  router: RouterReducerState<any>;
}
export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  router: routerReducer
};

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
