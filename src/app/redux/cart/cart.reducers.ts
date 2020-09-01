import {Action, createReducer, on} from '@ngrx/store';
import {closeModal, emptyCart, insertProductToCart, openModal, removeProductToCart} from './cart.actions';
import {CartProduct} from '../../core/model/CartProduct.interface';

export interface CartState {
  cart: CartProduct[];
  modalOpen: boolean;
}

export const initialState: CartState = {
  cart: [],
  modalOpen: false
};

export const cartReducer = createReducer(
  initialState,
 // on(initClothes, (state, {clothes}) => ({...state, clothes})),
  on(insertProductToCart, (state, {cart}) => ({ ...state, cart: [...state.cart, cart] })),
  on(removeProductToCart, (state, {id}) => ({ ...state, cart: state.cart.filter(item => item.prodotto._id !== id) })),
  on(emptyCart, (state) => ({...state, cart: []})),
  on(openModal, (state) => ({...state, modalOpen: true})),
  on(closeModal, (state) => ({...state, modalOpen: false}))
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
