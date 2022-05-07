import { IGenericObject } from "../models/ICommon";

export function hasObjectEmptyField(obj: IGenericObject) {
  for (let key in obj) {
    if (obj[key] === "") {
      return true;
    }
  }
  return false;
}
