export default interface RateChart {
  id: string;
  range_from: number;
  range_to: number;
  rate: number;
  commision: number | null;
  bonus: number | null;
  cowType: 'cow' | 'buff';
}
