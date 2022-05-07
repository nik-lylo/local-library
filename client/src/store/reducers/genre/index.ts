import { GenreAction, GenreActionEnum, IGenreState } from "./types";

const initialState: IGenreState = {
  genreList: [],
  isGenreLoaded: false,
  totalBookGenre: 0,
};

export default function genreReducer(
  state = initialState,
  action: GenreAction
): IGenreState {
  switch (action.type) {
    case GenreActionEnum.SET_GENRE_LIST:
      return { ...state, genreList: action.payload };
    case GenreActionEnum.SET_IS_GENRE_LOADED:
      return { ...state, isGenreLoaded: action.payload };
    case GenreActionEnum.SET_TOTAL_BOOK_GENRE:
      return { ...state, totalBookGenre: action.payload };

    default:
      return state;
  }
}
