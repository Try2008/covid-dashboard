import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard } from '../../components/stat-card/stat-card';
import { TrendCard } from '../../components/trend-card/trend-card';
import { mainStatsData, weeklyStatsData } from '../../data/overview.data';

@Component({
  selector: 'app-overview-section',
  standalone: true,
  imports: [CommonModule, StatCard, TrendCard],
  templateUrl: './overview-section.html',
  styleUrl: './overview-section.scss',
})
export class OverviewSection {
  mainStats = mainStatsData;
  weeklyStats = weeklyStatsData;
}
