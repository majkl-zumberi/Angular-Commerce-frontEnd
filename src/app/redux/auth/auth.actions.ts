import { createAction, props} from '@ngrx/store';
import {User} from '../../core/model/user.interface';

export const initUser  = createAction('[User] init',  props<{user: User}>());
