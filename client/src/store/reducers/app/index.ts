import { AppAction, AppActionEnum, IAppState } from "./types";

const initialState: IAppState = {
  snackbarProps: { text: "", open: false, status: "success" },
};

export default function appReducer(
  state = initialState,
  action: AppAction
): IAppState {
  switch (action.type) {
    case AppActionEnum.SET_SNACKBAR_PROPS:
      return { ...state, snackbarProps: action.payload };
    default:
      return state;
  }
}
