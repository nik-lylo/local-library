import { TRegistrTypeForm } from "../../../lib/type";

export interface IAuthState {
  isAuth: boolean;
  isRegistrPopupOpen: boolean;
  typeRegisterForm: TRegistrTypeForm;
  token: null | string;
  emptyFieldError: boolean;
}

export enum AuthActionEnum {
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_TOKEN = "SET_TOKEN",
  SET_IS_REGISTR_POPUP_OPEN = "SET_IS_REGISTR_POPUP_OPEN",
  SET_TYPE_REGISTER_FORM = "SET_TYPE_REGISTER_FORM",
  SET_EMPTY_FIELD_ERROR = "SET_EMPTY_FIELD_ERROR",
}

export interface SetIsAuth {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}

export interface SetToken {
  type: AuthActionEnum.SET_TOKEN;
  payload: null | string;
}

export interface SetIsRegistrPopupOpen {
  type: AuthActionEnum.SET_IS_REGISTR_POPUP_OPEN;
  payload: boolean;
}
export interface SetTypeRegisterForm {
  type: AuthActionEnum.SET_TYPE_REGISTER_FORM;
  payload: TRegistrTypeForm;
}
export interface SetEmptyFieldError {
  type: AuthActionEnum.SET_EMPTY_FIELD_ERROR;
  payload: boolean;
}

export type AuthAction =
  | SetToken
  | SetIsAuth
  | SetIsRegistrPopupOpen
  | SetTypeRegisterForm
  | SetEmptyFieldError;
