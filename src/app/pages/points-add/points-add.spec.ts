import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsAdd } from './points-add';

describe('PointsAdd', () => {
  let component: PointsAdd;
  let fixture: ComponentFixture<PointsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
