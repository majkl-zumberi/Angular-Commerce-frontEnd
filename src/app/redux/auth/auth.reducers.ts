import {User} from '../../core/model/user.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {initUser, loginUserFailure} from './auth.actions';

export interface UserState {
  user: User;
  // error message
  errorMessage: string | null;
}

export const initialState: UserState = {
  user: JSON.parse(sessionStorage.getItem('utente'))as User,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(initUser, (state, {user}) => ({ ...state, user, errorMessage: null })),
  on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error})),

);

export function reducer(state: UserState | undefined, action: Action) {
  return authReducer(state, action);
}
