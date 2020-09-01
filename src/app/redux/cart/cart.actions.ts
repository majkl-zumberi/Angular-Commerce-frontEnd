import {createAction, props} from '@ngrx/store';
import {CartProduct} from '../../core/model/CartProduct.interface';

export const initCart = createAction('[cart] store init',  props<{cart: CartProduct[]}>());
export const insertProductToCart = createAction('[cart-product] store insert', props<{cart: CartProduct}>());
export const removeProductToCart = createAction('[cart-product] store remove', props<{id: string}>());
export const emptyCart = createAction('[cart] remove all');
export const openModal = createAction('[cart] open modal purchase success');
export const closeModal = createAction('[cart] close modal purchase success');
// effects
export const performPurchase = createAction('[cart] perform purchase');

