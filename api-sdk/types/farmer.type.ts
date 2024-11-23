import Farmer from '../models/farmer.model';

export interface FarmerResponse {
  id: string;
  name: string;
  mobile: string;
  sync: number;
  farmer_id: number;
  created_at: string | null;
  updated_at: string | null;
}
