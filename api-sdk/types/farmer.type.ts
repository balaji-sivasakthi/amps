import Farmer from '../models/farmer.model';

export interface FarmerResponse extends Farmer {
  created_at: string | null;
  updated_at: string | null;
}
