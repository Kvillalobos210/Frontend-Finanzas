import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPortafolioComponent } from './lista-portafolio.component';

describe('ListaPortafolioComponent', () => {
  let component: ListaPortafolioComponent;
  let fixture: ComponentFixture<ListaPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
