import {createAction, props} from '@ngrx/store';
import {Dress} from '../../core/model/dress.interface';

export const initClothes = createAction('[Clothes] store init',  props<{clothes: Dress[]}>());

// effects
export const retreiveAllClothes = createAction('[Clothes] effect - get all');
