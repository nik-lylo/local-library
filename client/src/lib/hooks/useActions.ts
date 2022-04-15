import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { allActionCreators } from "../../store/reducers/action_creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
