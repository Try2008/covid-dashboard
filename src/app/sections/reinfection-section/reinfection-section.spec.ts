import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinfectionSection } from './reinfection-section';

describe('ReinfectionSection', () => {
  let component: ReinfectionSection;
  let fixture: ComponentFixture<ReinfectionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinfectionSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ReinfectionSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
