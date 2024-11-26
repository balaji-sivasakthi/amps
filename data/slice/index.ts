import { combineReducers } from 'redux';
import farmer from './farmer.slice';
import auth from './auth.slice';
import rateChart from './rate-chart.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

const rootReducer = combineReducers({
  farmer,
  auth,
  rateChart,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
