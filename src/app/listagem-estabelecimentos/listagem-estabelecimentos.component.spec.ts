import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEstabelecimentosComponent } from './listagem-estabelecimentos.component';

describe('ListagemEstabelecimentosComponent', () => {
  let component: ListagemEstabelecimentosComponent;
  let fixture: ComponentFixture<ListagemEstabelecimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemEstabelecimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
