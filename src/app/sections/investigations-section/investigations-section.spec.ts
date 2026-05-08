import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsSection } from './investigations-section';

describe('InvestigationsSection', () => {
  let component: InvestigationsSection;
  let fixture: ComponentFixture<InvestigationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigationsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestigationsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
