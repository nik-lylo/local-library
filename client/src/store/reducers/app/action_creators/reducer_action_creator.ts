import { ISnackbar } from "../../../../lib/models/ISnackbar";
import { AppActionEnum, SetSnackbarProps } from "../types";

export const AppReducerActionCreator = {
  setSnackbarProps: (props: ISnackbar): SetSnackbarProps => ({
    type: AppActionEnum.SET_SNACKBAR_PROPS,
    payload: props,
  }),
};
