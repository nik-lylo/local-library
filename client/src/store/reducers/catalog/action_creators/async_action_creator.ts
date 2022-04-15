import { AppDispatch } from "../../..";
import { fetchRequest } from "../../../../lib/helper/fetchRequest";
import { AppReducerActionCreator } from "../../app/action_creators/reducer_action_creator";
import { CatalogReducerActionCreator } from "./reducer_action_creator";

export const AsyncCatalogActionCreators = {
  setFetchCatalogBooks: () => async (dispatch: AppDispatch) => {
    dispatch(CatalogReducerActionCreator.setIsCatalogLoading(true));
    try {
      const books = await fetchRequest("/api/catalog/", "GET");
      console.log(books);
      dispatch(CatalogReducerActionCreator.setCatalogBooks(books.message));
    } catch (e: any) {
      dispatch(
        AppReducerActionCreator.setSnackbarProps({
          open: true,
          status: "error",
          text: e.message,
        })
      );
      console.log(e.message);
    } finally {
      dispatch(CatalogReducerActionCreator.setIsCatalogLoading(false));
    }
  },
};
