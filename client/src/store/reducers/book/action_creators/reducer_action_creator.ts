import { IBook } from "../../../../lib/models/IBook";
import { BookActionEnum, SetSelectedBook } from "../types";

export const BookReducerActionCreator = {
  setSelectedBook: (book: IBook | null): SetSelectedBook => ({
    type: BookActionEnum.SET_SELECTED_BOOK,
    payload: book,
  }),
};
