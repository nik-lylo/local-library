import { AppDispatch } from "../../..";
import { fetchRequest } from "../../../../lib/helper/fetchRequest";
import { AppReducerActionCreator } from "../../app/action_creators/reducer_action_creator";
import { GenreReducerActionCreator } from "./reducer_action_creator";

export const AsyncGenreActionCreators = {
  setFetchGenreList: (params: string) => async (dispatch: AppDispatch) => {
    dispatch(GenreReducerActionCreator.setIsGenreLoaded(true));
    try {
      const books = await fetchRequest(`/api/genre/${params}`, "GET");
      console.log(books);
      dispatch(GenreReducerActionCreator.setGenreList(books.message));
      dispatch(GenreReducerActionCreator.setTotalBookGenre(books.totalItems));
    } catch (e: any) {
      dispatch(
        AppReducerActionCreator.setSnackbarProps({
          open: true,
          status: "error",
          text: e.message,
        })
      );
    } finally {
      dispatch(GenreReducerActionCreator.setIsGenreLoaded(false));
    }
  },
};
