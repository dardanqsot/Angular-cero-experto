import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    //guion bajo para indicar q es pribado
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 10000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  
  constructor() { }

  agregarPersonaje ( personaje: Personaje) {
      this._personajes.push(personaje);
  }
}
