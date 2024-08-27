import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundationComponent } from './fundation.component';

describe('FundationComponent', () => {
  let component: FundationComponent;
  let fixture: ComponentFixture<FundationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundationComponent]
    });
    fixture = TestBed.createComponent(FundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
