import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';

@Component({
  selector: 'app-investigations-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './investigations-section.html',
  styleUrl: './investigations-section.scss',
})
export class InvestigationsSection {}
