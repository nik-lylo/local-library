import { TRegistrTypeForm } from "../../../../lib/type";
import {
  AuthActionEnum,
  SetEmptyFieldError,
  SetIsAuth,
  SetIsRegistrPopupOpen,
  SetToken,
  SetTypeRegisterForm,
} from "../types";

export const AuthReducerActionReducer = {
  setIsAuth: (flag: boolean): SetIsAuth => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: flag,
  }),
  setToken: (token: null | string): SetToken => ({
    type: AuthActionEnum.SET_TOKEN,
    payload: token,
  }),
  setIsRegisterPopupOpen: (flag: boolean): SetIsRegistrPopupOpen => ({
    type: AuthActionEnum.SET_IS_REGISTR_POPUP_OPEN,
    payload: flag,
  }),
  setTypeRegisterForm: (type: TRegistrTypeForm): SetTypeRegisterForm => ({
    type: AuthActionEnum.SET_TYPE_REGISTER_FORM,
    payload: type,
  }),
  setEmptyFieldError: (flag: boolean): SetEmptyFieldError => ({
    type: AuthActionEnum.SET_EMPTY_FIELD_ERROR,
    payload: flag,
  }),
};
