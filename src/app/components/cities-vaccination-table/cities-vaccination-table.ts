import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityVaccination } from '../../models/city-vaccination.model';
import { SortState } from '../../models/sort-state.model';
import { citiesVaccinationData } from '../../data/cities-vaccination.data';
import { sortByColumn } from '../../utils/sort.util';

interface ColumnDef {
  key: keyof CityVaccination;
  label: string;
  isNumeric: boolean;
  isPercent?: boolean;
}

@Component({
  selector: 'app-cities-vaccination-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cities-vaccination-table.html',
  styleUrl: './cities-vaccination-table.scss',
})
export class CitiesVaccinationTable {
  readonly columns: ColumnDef[] = [
    { key: 'cityName',         label: 'יישוב',     isNumeric: false },
    { key: 'population',       label: 'אוכלוסיה',  isNumeric: true  },
    { key: 'dose1Count',       label: 'מתחסנים',   isNumeric: true  },
    { key: 'dose1Percentage',  label: '%',         isNumeric: true, isPercent: true },
    { key: 'dose2Count',       label: 'מתחסנים',   isNumeric: true  },
    { key: 'dose2Percentage',  label: '%',         isNumeric: true, isPercent: true },
    { key: 'dose3Count',       label: 'מתחסנים',   isNumeric: true  },
    { key: 'dose3Percentage',  label: '%',         isNumeric: true, isPercent: true },
    { key: 'dose4Count',       label: 'מתחסנים',   isNumeric: true  },
    { key: 'dose4Percentage',  label: '%',         isNumeric: true, isPercent: true },
  ];

  private readonly cities: CityVaccination[] = citiesVaccinationData;
  displayedCities: CityVaccination[] = [];
  sortState: SortState | null = { column: 'population', direction: 'desc' };
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

  private applySortAndFilter(): void {
    const term = this.searchTerm.trim();
    const filtered = term
      ? this.cities.filter(city => city.cityName.includes(term))
      : this.cities;

    this.displayedCities = this.sortState
      ? sortByColumn(filtered, this.sortState.column as keyof CityVaccination, this.sortState.direction)
      : [...filtered];
  }
}
