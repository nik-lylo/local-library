import { IBook } from "./IBook";

export interface IBookCatalogObject {
  [key: string]: IBook[];
}
