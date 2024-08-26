import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAdicionalesComponent } from './cursos-adicionales.component';

describe('CursosAdicionalesComponent', () => {
  let component: CursosAdicionalesComponent;
  let fixture: ComponentFixture<CursosAdicionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosAdicionalesComponent]
    });
    fixture = TestBed.createComponent(CursosAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
