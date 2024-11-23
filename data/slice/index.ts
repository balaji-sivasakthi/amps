import { combineReducers } from 'redux';
import farmer from './farmer.slice';
import auth from './auth.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

const rootReducer = combineReducers({
  farmer,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
