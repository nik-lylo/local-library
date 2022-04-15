import { IBook } from "../../../lib/models/IBook";

export interface IGenreState {
  isGenreLoaded: boolean;
  genreList: IBook[];
  totalBookGenre: number;
}

export enum GenreActionEnum {
  SET_IS_GENRE_LOADED = "SET_IS_GENRE_LOADED",
  SET_GENRE_LIST = "SET_GENRE_LIST",
  SET_TOTAL_BOOK_GENRE = "SET_TOTAL_BOOK_GENRE",
}

export interface SetGenreList {
  type: GenreActionEnum.SET_GENRE_LIST;
  payload: IBook[];
}

export interface SetIsGenreLoaded {
  type: GenreActionEnum.SET_IS_GENRE_LOADED;
  payload: boolean;
}

export interface SetTotalBookGenre {
  type: GenreActionEnum.SET_TOTAL_BOOK_GENRE;
  payload: number;
}

export type GenreAction = SetGenreList | SetIsGenreLoaded | SetTotalBookGenre;
