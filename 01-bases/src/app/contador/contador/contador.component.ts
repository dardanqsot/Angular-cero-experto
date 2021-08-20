import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <!--SE PUEDE ESCRIBIR CUALQUIER cosa de java script dentro de doble llaves-->

    <h3>
      La base es: <strong> {{ base }}</strong>
    </h3>
    <button (click)="acumular(base)">+{{ base }}</button>
    <!--Lo que va en parentesis son eventos   += no funciona en el template html-->

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {

    public title: string = 'Contador app';
    numero: number = 10;
    base : number = 5;
  
    acumular( valor:number ) {
      this.numero += valor;
    }
}
