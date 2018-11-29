import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // estado para a quantidade de dinheiro
  // estado inteiro será guardado no localstorage
  // de X em X minutos adicionar dinheiro pro cara

  private money = 0;
  private lastTime: Date = new Date();

  constructor() {
    this.loadMemento();
  }

  public calculate () {
    const thisDate: Date = new Date();
    const diff = ( thisDate.getTime() - this.lastTime.getTime()) / 60 / 1000;
    this.lastTime = new Date();

    const value = diff * 100;
    this.money += value;

    console.log(this.money);

    this.saveMemento();
  }

  public saveMemento() {
    window.localStorage.setItem('lastTime', this.lastTime.toDateString());
    window.localStorage.setItem('money', this.money.toString());
  }

  public loadMemento() {
    this.lastTime = new Date(window.localStorage.getItem('lastTime'));
    this.money = Number.parseFloat(window.localStorage.getItem('money'));
  }

  public getMoney() {
    return this.money;
  }

}
