import { AppAction, AppActionEnum, IAppState } from "./types";

const initialState: IAppState = {
  snackbarProps: { text: "", open: false, status: "success" },
  test: 0,
};

export default function appReducer(
  state = initialState,
  action: AppAction
): IAppState {
  switch (action.type) {
    case AppActionEnum.SET_SNACKBAR_PROPS:
      return { ...state, snackbarProps: action.payload };
    case AppActionEnum.SET_TEST:
      return { ...state, test: action.payload };
    default:
      return state;
  }
}
