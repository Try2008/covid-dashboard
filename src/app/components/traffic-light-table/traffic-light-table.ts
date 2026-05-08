import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityTrafficLight, TrafficLightStatus } from '../../models/city-traffic-light.model';
import { SortState } from '../../models/sort-state.model';
import { citiesTrafficLightData } from '../../data/cities-traffic-light.data';
import { sortByColumn } from '../../utils/sort.util';

interface ColumnDef {
  key: keyof CityTrafficLight;
  label: string;
  isNumeric: boolean;
}

const STATUS_ORDER: Record<TrafficLightStatus, number> = {
  green: 1,
  yellow: 2,
  orange: 3,
  red: 4,
};

const STATUS_LABEL_HE: Record<TrafficLightStatus, string> = {
  red: 'אדום',
  orange: 'כתום',
  yellow: 'צהוב',
  green: 'ירוק',
};

@Component({
  selector: 'app-traffic-light-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './traffic-light-table.html',
  styleUrl: './traffic-light-table.scss',
})
export class TrafficLightTable {
  readonly columns: ColumnDef[] = [
    { key: 'cityName',           label: 'יישוב',                isNumeric: false },
    { key: 'score',              label: 'ציון רמזור',           isNumeric: true  },
    { key: 'status',             label: 'מצב',                  isNumeric: false },
    { key: 'activeCases',        label: 'חולים פעילים',          isNumeric: true  },
    { key: 'weeklyAddition',     label: 'תוספת שבועית',          isNumeric: true  },
    { key: 'positivePercentage', label: '% בדיקות חיוביות',      isNumeric: true  },
    { key: 'weeklyGrowthRate',   label: 'שיעור גידול שבועי',     isNumeric: true  },
  ];

  private readonly cities: CityTrafficLight[] = citiesTrafficLightData;
  displayedCities: CityTrafficLight[] = [];
  sortState: SortState | null = { column: 'score', direction: 'desc' };
  searchTerm = '';

  constructor() {
    this.applySortAndFilter();
  }

  onSortColumn(columnKey: string): void {
    if (this.sortState && this.sortState.column === columnKey) {
      this.sortState = {
        column: columnKey,
        direction: this.sortState.direction === 'asc' ? 'desc' : 'asc',
      };
    } else {
      this.sortState = { column: columnKey, direction: 'asc' };
    }
    this.applySortAndFilter();
  }

  onSearchChange(): void {
    this.applySortAndFilter();
  }

  isSortedBy(columnKey: string, direction: 'asc' | 'desc'): boolean {
    return !!this.sortState && this.sortState.column === columnKey && this.sortState.direction === direction;
  }

  ariaSortFor(columnKey: string): 'ascending' | 'descending' | 'none' {
    if (!this.sortState || this.sortState.column !== columnKey) return 'none';
    return this.sortState.direction === 'asc' ? 'ascending' : 'descending';
  }

  getStatusLabel(status: TrafficLightStatus): string {
    return STATUS_LABEL_HE[status];
  }

  getGrowthClass(rate: number): string {
    if (rate >= 50) return 'growth-high';
    if (rate > 0) return 'growth-mid';
    if (rate < 0) return 'growth-down';
    return '';
  }

  getGrowthArrow(rate: number): string {
    if (rate > 0) return '▲';
    if (rate < 0) return '▼';
    return '';
  }

  private applySortAndFilter(): void {
    const term = this.searchTerm.trim();
    const filtered = term
      ? this.cities.filter(city => city.cityName.includes(term))
      : this.cities;

    if (!this.sortState) {
      this.displayedCities = [...filtered];
      return;
    }

    const column = this.sortState.column as keyof CityTrafficLight;
    const customOrder = column === 'status' ? STATUS_ORDER : undefined;
    this.displayedCities = sortByColumn(filtered, column, this.sortState.direction, customOrder);
  }
}
