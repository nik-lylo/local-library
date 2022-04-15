import { IBook } from "../../../../lib/models/IBook";
import {
  GenreActionEnum,
  SetGenreList,
  SetIsGenreLoaded,
  SetTotalBookGenre,
} from "../types";

export const GenreReducerActionCreator = {
  setGenreList: (list: IBook[]): SetGenreList => ({
    type: GenreActionEnum.SET_GENRE_LIST,
    payload: list,
  }),

  setIsGenreLoaded: (flag: boolean): SetIsGenreLoaded => ({
    type: GenreActionEnum.SET_IS_GENRE_LOADED,
    payload: flag,
  }),

  setTotalBookGenre: (num: number): SetTotalBookGenre => ({
    type: GenreActionEnum.SET_TOTAL_BOOK_GENRE,
    payload: num,
  }),
};
