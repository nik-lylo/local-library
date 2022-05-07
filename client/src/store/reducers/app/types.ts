import { ISnackbar } from "../../../lib/models/ISnackbar";

export interface IAppState {
  snackbarProps: ISnackbar;
  test: number;
}

export enum AppActionEnum {
  SET_SNACKBAR_PROPS = "SET_SNACKBAR_PROPS",
  SET_TEST = "SET_TEST",
}

export interface SetSnackbarProps {
  type: AppActionEnum.SET_SNACKBAR_PROPS;
  payload: ISnackbar;
}
export interface SetTest {
  type: AppActionEnum.SET_TEST;
  payload: number;
}

export type AppAction = SetSnackbarProps | SetTest;
