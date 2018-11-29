import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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
  private totalMoney: Number = 0.0;

  constructor(userService: UsuarioService) {
    userService.calculate();
    this.totalMoney =  userService.getMoney();
    
    setInterval(() => {
      userService.calculate();
      this.totalMoney = userService.getMoney();
    }, 5000);
  }

  ngOnInit() {}

}
