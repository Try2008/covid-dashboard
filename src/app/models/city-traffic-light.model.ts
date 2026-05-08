export type TrafficLightStatus = 'red' | 'orange' | 'yellow' | 'green';

export interface CityTrafficLight {
  cityName: string;
  score: number;
  status: TrafficLightStatus;
  activeCases: number;
  weeklyAddition: number;
  positivePercentage: number;
  weeklyGrowthRate: number;
}
