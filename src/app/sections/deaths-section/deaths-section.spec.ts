import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsSection } from './deaths-section';

describe('DeathsSection', () => {
  let component: DeathsSection;
  let fixture: ComponentFixture<DeathsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(DeathsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
