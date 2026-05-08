import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsSection } from './tests-section';

describe('TestsSection', () => {
  let component: TestsSection;
  let fixture: ComponentFixture<TestsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(TestsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
