export interface TrendCard {
  id: string;
  title: string;
  mainValue: string | number;
  tooltip?: string;
  trendPercentage: number;
  trendLabel: string;
  trendColor: 'positive' | 'negative' | 'neutral';
  extraLine?: string;
}
