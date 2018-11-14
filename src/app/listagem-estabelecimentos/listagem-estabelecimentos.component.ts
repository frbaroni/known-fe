import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-estabelecimentos',
  templateUrl: './listagem-estabelecimentos.component.html',
  styleUrls: ['./listagem-estabelecimentos.component.scss']
})
export class ListagemEstabelecimentosComponent implements OnInit {

  estabelecimentos = [
    { nome: 'Fazendinha', classe: 'A+', preco: 12345 },
    { nome: 'Michele (Itapetininga)', classe: 'B', preco: 6911 },
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
