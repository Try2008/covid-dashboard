import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesVaccinationTable } from './cities-vaccination-table';

describe('CitiesVaccinationTable', () => {
  let component: CitiesVaccinationTable;
  let fixture: ComponentFixture<CitiesVaccinationTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiesVaccinationTable],
    }).compileComponents();

    fixture = TestBed.createComponent(CitiesVaccinationTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
