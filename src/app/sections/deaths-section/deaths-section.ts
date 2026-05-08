import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';

@Component({
  selector: 'app-deaths-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './deaths-section.html',
  styleUrl: './deaths-section.scss',
})
export class DeathsSection {}
