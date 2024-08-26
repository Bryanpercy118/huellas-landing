import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDestacadosComponent } from './cursos-destacados.component';

describe('CursosDestacadosComponent', () => {
  let component: CursosDestacadosComponent;
  let fixture: ComponentFixture<CursosDestacadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosDestacadosComponent]
    });
    fixture = TestBed.createComponent(CursosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
