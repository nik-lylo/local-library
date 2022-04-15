import { ISnackbar } from "../../../lib/models/ISnackbar";

export interface IAppState {
  snackbarProps: ISnackbar;
}

export enum AppActionEnum {
  SET_SNACKBAR_PROPS = "SET_SNACKBAR_PROPS",
}

export interface SetSnackbarProps {
  type: AppActionEnum.SET_SNACKBAR_PROPS;
  payload: ISnackbar;
}

export type AppAction = SetSnackbarProps;
