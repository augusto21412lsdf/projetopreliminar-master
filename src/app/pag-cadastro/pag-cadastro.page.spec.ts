import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagCadastroPage } from './pag-cadastro.page';

describe('PagCadastroPage', () => {
  let component: PagCadastroPage;
  let fixture: ComponentFixture<PagCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
