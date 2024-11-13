import { combineReducers } from "redux";
import farmer from "./farmer.slice";

const rootReducer = combineReducers({
  farmer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
