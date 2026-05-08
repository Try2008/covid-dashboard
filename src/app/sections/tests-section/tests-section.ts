import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';
import { getTestedByAgeConfig, getDailyTestsComboConfig } from '../../data/charts.data';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tests-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './tests-section.html',
  styleUrl: './tests-section.scss',
})
export class TestsSection {
  testedByAgeOptions: Highcharts.Options = getTestedByAgeConfig();
  dailyTestsOptions: Highcharts.Options = getDailyTestsComboConfig();
}
