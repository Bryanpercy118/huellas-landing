import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonModelComponent } from './acordeon-model.component';

describe('AcordeonModelComponent', () => {
  let component: AcordeonModelComponent;
  let fixture: ComponentFixture<AcordeonModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcordeonModelComponent]
    });
    fixture = TestBed.createComponent(AcordeonModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
