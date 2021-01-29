import {Component} from '@angular/core';

@Component({
    selector: 'app-contador', 
    template: `
        <h1>{{title}}</h1>

        <h3>La base es: <strong>{{base}}</strong> </h3>


        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="noacumular(base)">-{{base}}</button>
  `
})
export class ContadorComponent{
    title = 'Prueba perrona';
    numero : number= 10;
    base: number= 5;
  
  
  
  acumular( valor: number){
    this.numero +=valor;
  }
  noacumular( valor: number){
    this.numero = this.numero - valor;
  }
  
}