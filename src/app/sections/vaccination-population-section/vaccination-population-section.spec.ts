import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationPopulationSection } from './vaccination-population-section';

describe('VaccinationPopulationSection', () => {
  let component: VaccinationPopulationSection;
  let fixture: ComponentFixture<VaccinationPopulationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccinationPopulationSection],
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinationPopulationSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
