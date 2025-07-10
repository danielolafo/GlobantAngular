import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCity } from './new-city';

describe('NewCity', () => {
  let component: NewCity;
  let fixture: ComponentFixture<NewCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
