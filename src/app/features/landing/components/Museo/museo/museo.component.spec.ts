import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseoComponent } from './museo.component';

describe('MuseoComponent', () => {
  let component: MuseoComponent;
  let fixture: ComponentFixture<MuseoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuseoComponent]
    });
    fixture = TestBed.createComponent(MuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
