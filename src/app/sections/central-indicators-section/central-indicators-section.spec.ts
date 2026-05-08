import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralIndicatorsSection } from './central-indicators-section';

describe('CentralIndicatorsSection', () => {
  let component: CentralIndicatorsSection;
  let fixture: ComponentFixture<CentralIndicatorsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralIndicatorsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(CentralIndicatorsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
