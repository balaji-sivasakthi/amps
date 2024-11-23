import { combineReducers } from 'redux';
import farmer from './farmer.slice';
import auth from './auth.slice';

const rootReducer = combineReducers({
  farmer,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
