import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { ChartCard } from '../../components/chart-card/chart-card';

@Component({
  selector: 'app-reinfection-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, ChartCard],
  templateUrl: './reinfection-section.html',
  styleUrl: './reinfection-section.scss',
})
export class ReinfectionSection {}
