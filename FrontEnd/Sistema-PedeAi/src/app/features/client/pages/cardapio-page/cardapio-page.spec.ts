import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPage } from './cardapio-page';

describe('CardapioPage', () => {
  let component: CardapioPage;
  let fixture: ComponentFixture<CardapioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CardapioPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
