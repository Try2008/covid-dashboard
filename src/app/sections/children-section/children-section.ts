import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';
import { getChildrenTrendConfig } from '../../data/charts.data';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-children-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './children-section.html',
  styleUrl: './children-section.scss',
})
export class ChildrenSection {
  childrenTrendOptions: Highcharts.Options = getChildrenTrendConfig();
}
