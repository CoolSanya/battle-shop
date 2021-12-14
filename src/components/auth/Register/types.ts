export enum RegisterActionTypes {
  REGISTER_AUTH = "REGISTER_AUTH"
}

export interface IRegisterModel {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IDateRegisterUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IRegisterResponse {
  data: IDateRegisterUser
  access: boolean,
  message: string,
}

export type RegisterError = {
  error: string,
}

export interface RegisterState {
  user: null|IDateRegisterUser,
  isRegister: boolean,
}

export interface RegisterAuthAction {
  type: RegisterActionTypes.REGISTER_AUTH,
  payload: IDateRegisterUser,
}

export type RegisterAction = RegisterAuthAction;