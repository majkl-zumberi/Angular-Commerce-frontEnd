import { createAction, props} from '@ngrx/store';
import {User} from '../../core/model/user.interface';

export const initUser  = createAction('[User] init',  props<{user: User}>());

// effects
// login
export const loginUser = createAction('[Auth] Login',  props<{email: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{token: string}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());

// signUp
export const signUpUser = createAction('[Auth] signUp',  props<{email: string, password: string}>());
export const signUpUserSuccess = createAction('[Auth] signUp Success', props<{token: string}>());
export const signUpUserFailure = createAction('[Auth] signUp Failure', props<{error: string}>());

