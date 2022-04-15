import { IBook } from "../../../lib/models/IBook";

export interface IBookState {
  selectedBook: IBook | null;
}

export enum BookActionEnum {
  SET_SELECTED_BOOK = "SET_SELECTED_BOOK",
}

export interface SetSelectedBook {
  type: BookActionEnum.SET_SELECTED_BOOK;
  payload: IBook | null;
}

export type BookAction = SetSelectedBook;
