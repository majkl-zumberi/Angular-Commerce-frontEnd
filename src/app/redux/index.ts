import {authReducer, UserState} from './auth/auth.reducers';
import {getSelectors, routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {clothesReducer, ClothesState} from './clothes/clothes.reducers';
import {Params} from '@angular/router';
import {cartReducer, CartState} from './cart/cart.reducers';

export interface AppState {
  authState: UserState;
  clothesState: ClothesState;
  router: RouterReducerState<any>;
  shoppingCartState: CartState;
}
export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  clothesState: clothesReducer,
  router: routerReducer,
  shoppingCartState: cartReducer
};

export const selectClotheState = (state: AppState) => state.clothesState;
export const selectUserState = (state: AppState) => state.authState;
export const selectShoppingCartState = (state: AppState) => state.shoppingCartState;
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

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectClothes = createSelector(
  selectClotheState,
  (state: ClothesState) => state.clothes
);

export const getSizeCart = createSelector (
  selectShoppingCartState,
  (state: CartState) => state.cart.length
);

export const getModalState = createSelector (
  selectShoppingCartState,
  (state: CartState) => state.modalOpen
);

export const getCartProducts = createSelector(
  selectShoppingCartState,
  (state: CartState) => state.cart
);

export const getCartProductsTotalPrice = createSelector(
  selectShoppingCartState,
  (state: CartState) => {
    return state.cart.reduce((total, current, idx) => total += current.prodotto.price, 0);
  }
);

export const getCurrentNavigatedClothe = createSelector(
  selectClotheState,
  selectRouteParams,
  (state: ClothesState, params: Params) => state.clothes.find(item => item._id === params.id)
);
