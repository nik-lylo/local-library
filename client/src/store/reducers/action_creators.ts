import { AppReducerActionCreator } from "./app/action_creators/reducer_action_creator";
import { BookReducerActionCreator } from "./book/action_creators/reducer_action_creator";
import { AsyncCatalogActionCreators } from "./catalog/action_creators/async_action_creator";
import { CatalogReducerActionCreator } from "./catalog/action_creators/reducer_action_creator";
import { AsyncGenreActionCreators } from "./genre/action_creators/async_action_creator";
import { GenreReducerActionCreator } from "./genre/action_creators/reducer_action_creator";

export const allActionCreators = {
  ...CatalogReducerActionCreator,
  ...AsyncCatalogActionCreators,
  ...AppReducerActionCreator,
  ...GenreReducerActionCreator,
  ...AsyncGenreActionCreators,
  ...BookReducerActionCreator,
};
