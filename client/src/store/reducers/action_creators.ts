import { AppReducerActionCreator } from "./app/action_creators/reducer_action_creator";
import { AsyncAuthActionCreators } from "./auth/action_creators/async_action_creator";
import { AuthReducerActionReducer } from "./auth/action_creators/reducer_action_creator";
import { BookReducerActionCreator } from "./book/action_creators/reducer_action_creator";
import { AsyncCatalogActionCreators } from "./catalog/action_creators/async_action_creator";
import { CatalogReducerActionCreator } from "./catalog/action_creators/reducer_action_creator";
import { AsyncGenreActionCreators } from "./genre/action_creators/async_action_creator";
import { GenreReducerActionCreator } from "./genre/action_creators/reducer_action_creator";

export const allActionCreators = {
  ...AuthReducerActionReducer,
  ...AsyncAuthActionCreators,
  ...CatalogReducerActionCreator,
  ...AsyncCatalogActionCreators,
  ...AppReducerActionCreator,
  ...GenreReducerActionCreator,
  ...AsyncGenreActionCreators,
  ...BookReducerActionCreator,
};
