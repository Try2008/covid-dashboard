import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard as StatCardModel } from '../../models/stat-card.model';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  @Input() data!: StatCardModel;

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }
}
