import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.scss',
})
export class DashboardSection {
  @Input() title: string = '';
  @Input() hasLinks: boolean = false;
}
