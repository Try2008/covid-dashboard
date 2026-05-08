import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './chart-card.html',
  styleUrl: './chart-card.scss',
})
export class ChartCard {
  @Input() title: string = '';
  @Input() tooltipText?: string;
  @Input() chartOptions!: Highcharts.Options;
  @Input() hasMonthFilter: boolean = false;
}
