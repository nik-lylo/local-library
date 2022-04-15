import { BookAction, BookActionEnum, IBookState } from "./types";

const initialState: IBookState = {
  selectedBook: null,
};

export default function bookReducer(
  state = initialState,
  action: BookAction
): IBookState {
  switch (action.type) {
    case BookActionEnum.SET_SELECTED_BOOK:
      return { ...state, selectedBook: action.payload };
    default:
      return state;
  }
}
