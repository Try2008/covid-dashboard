import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCard } from './trend-card';

describe('TrendCard', () => {
  let component: TrendCard;
  let fixture: ComponentFixture<TrendCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
