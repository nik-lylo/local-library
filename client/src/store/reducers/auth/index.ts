import { AuthAction, AuthActionEnum, IAuthState } from "./types";

const initialState: IAuthState = {
  isAuth: false,
  token: null,
  isRegistrPopupOpen: false,
  typeRegisterForm: null,
  emptyFieldError: false,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionEnum.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionEnum.SET_IS_REGISTR_POPUP_OPEN:
      return { ...state, isRegistrPopupOpen: action.payload };
    case AuthActionEnum.SET_TYPE_REGISTER_FORM:
      return { ...state, typeRegisterForm: action.payload };
    case AuthActionEnum.SET_EMPTY_FIELD_ERROR:
      return { ...state, emptyFieldError: action.payload };
    default:
      return state;
  }
}
