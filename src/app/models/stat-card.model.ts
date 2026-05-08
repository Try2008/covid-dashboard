export interface StatCard {
  id: string;
  title: string;
  mainValue?: string | number; // Optional because some cards (like vaccinations) don't have a single main value
  secondaryLines?: { value: string | number; label: string }[];
  tooltip?: string;
  hasMenu?: boolean;
}
