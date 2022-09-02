import { createAction, props } from '@ngrx/store';
import { UserAuth } from './user.state';

export enum UserActionsNames {
	UserInit = '[User] Init',
	UserInitSuccess = '[User] Init Success',
	UserInitFailure = '[User] Init Failure',
	UserLogin = '[User] Login User',
	UserLoginSuccess = '[User] Login User Success',
	UserLoginFailure = '[User] Login User Failure',
	UserRegister = '[User] Register User',
	UserRegisterSuccess = '[User] Register User Success',
	UserRegisterFailure = '[User] Register User Failure',
	UserLogout = '[User] Logout User',
	UserLogoutSuccess = '[User] Logout User Success',
	UserLogoutFailure = '[User] Logout User Failure',
}

export const UserInit = createAction(UserActionsNames.UserInit);

export const UserInitSuccess = createAction(
	UserActionsNames.UserInitSuccess,
	props<{ user: UserAuth }>()
);

export const UserInitFailure = createAction(
	UserActionsNames.UserInitFailure,
	props<{ user: undefined }>()
);

export const UserLogin = createAction(
	UserActionsNames.UserLogin,
	props<{ email: string; password: string }>()
);

export const UserLoginSuccess = createAction(
	UserActionsNames.UserLoginSuccess,
	props<{ user: UserAuth }>()
);

export const UserLoginFailure = createAction(
	UserActionsNames.UserLoginFailure,
	props<{ error: string | null }>()
);

export const UserRegister = createAction(
	UserActionsNames.UserRegister,
	props<{
		email: string;
		password: string;
		firstName: string;
		lastName: string;
		phone: string;
		address: string;
		city: string;
	}>()
);

export const UserRegisterSuccess = createAction(
	UserActionsNames.UserRegisterSuccess,
	props<{ user: UserAuth }>()
);

export const UserRegisterFailure = createAction(
	UserActionsNames.UserRegisterFailure,
	props<{ error: string | null }>()
);

export const UserLogout = createAction(
	UserActionsNames.UserLogout,
	props<{ token: string }>()
);

export const UserLogoutSuccess = createAction(
	UserActionsNames.UserLogoutSuccess,
	props<{ message: string }>()
);

export const UserLogoutFailure = createAction(
	UserActionsNames.UserLogoutFailure,
	props<{ error: string | null }>()
);
