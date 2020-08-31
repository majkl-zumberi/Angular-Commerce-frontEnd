import {Action, createReducer, on} from '@ngrx/store';
import {emptyCart, insertProductToCart, removeProductToCart} from './cart.actions';
import {CartProduct} from '../../core/model/CartProduct.interface';

export interface CartState {
  cart: CartProduct[];
}

export const initialState: CartState = {
  cart: []
};

export const cartReducer = createReducer(
  initialState,
 // on(initClothes, (state, {clothes}) => ({...state, clothes})),
  on(insertProductToCart, (state, {cart}) => ({ ...state, cart: [...state.cart, cart] })),
  on(removeProductToCart, (state, {id}) => ({ ...state, cart: state.cart.filter(item => item.prodotto._id !== id) })),
  on(emptyCart, (state) => ({...state, cart: []}))
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
