import {
  CatalogActionEnum,
  SetCatalogBooks,
  SetIsCatalogLoading,
} from "../types";

export const CatalogReducerActionCreator = {
  setCatalogBooks: (books: any): SetCatalogBooks => ({
    type: CatalogActionEnum.SET_CATALOG_BOOKS,
    payload: books,
  }),
  setIsCatalogLoading: (flag: boolean): SetIsCatalogLoading => ({
    type: CatalogActionEnum.SET_IS_CATALOG_LOADING,
    payload: flag,
  }),
};
