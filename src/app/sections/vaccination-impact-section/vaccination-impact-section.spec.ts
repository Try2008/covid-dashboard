import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationImpactSection } from './vaccination-impact-section';

describe('VaccinationImpactSection', () => {
  let component: VaccinationImpactSection;
  let fixture: ComponentFixture<VaccinationImpactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccinationImpactSection],
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinationImpactSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
