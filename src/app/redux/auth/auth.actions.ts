import { createAction, props} from '@ngrx/store';
import {User} from '../../core/model/user.interface';

export const initUser  = createAction('[User] init',  props<{user: User}>());
export const updateUser = createAction('[User] update', props<{user: User}>());
// effects
// login
export const loginUser = createAction('[Auth] Login',  props<{email: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{token: string}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());

// signUp
export const signUpUser = createAction('[Auth] signUp',  props<{email: string, password: string}>());
export const signUpUserSuccess = createAction('[Auth] signUp Success', props<{token: string}>());
export const signUpUserFailure = createAction('[Auth] signUp Failure', props<{error: string}>());

// update
export const editUser = createAction('[User] edit', props<{user: User}>());

// retrieve
export const retrieveUserInfo = createAction('[User] retrieve info');

// save To DB
export const persistUserData = createAction('[user] save user data to db');
