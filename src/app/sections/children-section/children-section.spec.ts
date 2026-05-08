import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenSection } from './children-section';

describe('ChildrenSection', () => {
  let component: ChildrenSection;
  let fixture: ComponentFixture<ChildrenSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrenSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
