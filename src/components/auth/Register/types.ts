export enum RegisterActionTypes {
  REGISTER_AUTH = "REGISTER_AUTH"
}

export interface IRegisterModel {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IRegisterResponse {
  data: IUser
  access: boolean,
  message: string,
}

export type RegisterError = {
  error: string,
}

export interface RegisterState {
  user: null|IUser,
  isRegister: boolean,
}

export interface RegisterAuthAction {
  type: RegisterActionTypes.REGISTER_AUTH,
  payload: IUser,
}

export type RegisterAction = RegisterAuthAction;