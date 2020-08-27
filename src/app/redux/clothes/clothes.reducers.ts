import {Dress} from '../../core/model/dress.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {initClothes} from './clothes.actions';

export interface ClothesState {
  clothes: Dress[];
}

export const initialState: ClothesState = {
  clothes: []
};

export const clothesReducer = createReducer(
  initialState,
  on(initClothes, (state, {clothes}) => ({...state, clothes})),
);

export function reducer(state: ClothesState | undefined, action: Action) {
  return clothesReducer(state, action);
}
