import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';
import { getVaccinationByAgeConfig } from '../../data/charts.data';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-vaccination-population-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './vaccination-population-section.html',
  styleUrl: './vaccination-population-section.scss',
})
export class VaccinationPopulationSection {
  vaccinationByAgeOptions: Highcharts.Options = getVaccinationByAgeConfig();
}
