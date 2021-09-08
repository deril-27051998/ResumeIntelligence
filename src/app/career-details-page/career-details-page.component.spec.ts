import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailsPageComponent } from './career-details-page.component';

describe('CareerDetailsPageComponent', () => {
  let component: CareerDetailsPageComponent;
  let fixture: ComponentFixture<CareerDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
