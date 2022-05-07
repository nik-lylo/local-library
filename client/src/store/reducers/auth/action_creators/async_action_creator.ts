import { AppDispatch } from "../../..";
import { fetchRequest } from "../../../../lib/helper/fetchRequest";
import { IAuthDto } from "../../../../lib/models/ICommon";

export const AsyncAuthActionCreators = {
  setFetchSignUp: (formInput: IAuthDto) => async (dispatch: AppDispatch) => {
    try {
      const userData = await fetchRequest("/api/auth/signup", "POST", {
        ...formInput,
      });
      // const userData = await fetchRequest("/api/auth/users", "GET");
      console.log(userData);
    } catch (e: any) {
      console.log(e.message);
    }
  },
};
