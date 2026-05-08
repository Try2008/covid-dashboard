import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';

@Component({
  selector: 'app-vaccination-impact-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './vaccination-impact-section.html',
  styleUrl: './vaccination-impact-section.scss',
})
export class VaccinationImpactSection {}
