import Farmer from '../models/farmer.model';
import RateChart from '../models/ratechart.model';

type TimeStamp = {
  created_at: string | null;
  updated_at: string | null;
};

export type FarmerResponse = Farmer & TimeStamp;
export type RateChartResponse = RateChart & TimeStamp;
