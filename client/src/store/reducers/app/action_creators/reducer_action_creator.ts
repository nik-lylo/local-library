import { ISnackbar } from "../../../../lib/models/ISnackbar";
import { AppActionEnum, SetSnackbarProps, SetTest } from "../types";

export const AppReducerActionCreator = {
  setSnackbarProps: (props: ISnackbar): SetSnackbarProps => ({
    type: AppActionEnum.SET_SNACKBAR_PROPS,
    payload: props,
  }),
  setTest: (num: number): SetTest => ({
    type: AppActionEnum.SET_TEST,
    payload: num,
  }),
};
