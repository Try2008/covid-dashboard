import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSection } from '../../components/dashboard-section/dashboard-section';
import { TrafficLightTable } from '../../components/traffic-light-table/traffic-light-table';

@Component({
  selector: 'app-traffic-light-section',
  standalone: true,
  imports: [CommonModule, DashboardSection, TrafficLightTable],
  templateUrl: './traffic-light-section.html',
  styleUrl: './traffic-light-section.scss',
})
export class TrafficLightSection {}
