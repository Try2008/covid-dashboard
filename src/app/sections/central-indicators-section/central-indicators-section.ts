import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';
import { getDailyConfirmedConfig } from '../../data/charts.data';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-central-indicators-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './central-indicators-section.html',
  styleUrl: './central-indicators-section.scss',
})
export class CentralIndicatorsSection {
  chartOptions: Highcharts.Options = getDailyConfirmedConfig();
}
