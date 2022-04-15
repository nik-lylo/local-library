import { CatalogAction, CatalogActionEnum, ICatalogState } from "./types";

const initialState: ICatalogState = {
  catalogBooks: {},
  isCatalogLoading: false,
};

export default function catalogReducer(
  state = initialState,
  action: CatalogAction
): ICatalogState {
  switch (action.type) {
    case CatalogActionEnum.SET_CATALOG_BOOKS:
      return { ...state, catalogBooks: action.payload };
    case CatalogActionEnum.SET_IS_CATALOG_LOADING:
      return { ...state, isCatalogLoading: action.payload };
    default:
      return state;
  }
}
