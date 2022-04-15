import { IBookCatalogObject } from "../../../lib/models/IBookCatalogObject";

export interface ICatalogState {
  isCatalogLoading: boolean;
  catalogBooks: IBookCatalogObject;
}

export enum CatalogActionEnum {
  SET_CATALOG_BOOKS = "SET_CATALOG_BOOKS",
  SET_IS_CATALOG_LOADING = "SET_IS_CATALOG_LOADING",
}

export interface SetCatalogBooks {
  type: CatalogActionEnum.SET_CATALOG_BOOKS;
  payload: IBookCatalogObject;
}
export interface SetIsCatalogLoading {
  type: CatalogActionEnum.SET_IS_CATALOG_LOADING;
  payload: boolean;
}

export type CatalogAction = SetCatalogBooks | SetIsCatalogLoading;
