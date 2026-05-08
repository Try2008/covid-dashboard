import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendCard as TrendCardModel } from '../../models/trend-card.model';

@Component({
  selector: 'app-trend-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trend-card.html',
  styleUrl: './trend-card.scss',
})
export class TrendCard {
  @Input() data!: TrendCardModel;

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }

  get trendIcon(): string {
    if (this.data.trendPercentage > 0) return '▲';
    if (this.data.trendPercentage < 0) return '▼';
    return '';
  }

  get formattedTrend(): string {
    const absVal = Math.abs(this.data.trendPercentage);
    return `${absVal}%`;
  }
}
