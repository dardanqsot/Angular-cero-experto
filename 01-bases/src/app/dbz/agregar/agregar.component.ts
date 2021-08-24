import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input()
  personajes: Personaje[] = [];

  @Input()
  nuevo:Personaje = {
    nombre: '',
    poder: 0 
  }

   agregar() {
     //event.preventDefault(); /// para prevenir recarga pero solo en javascript recibiendo $event como prametro con angular es mas rápido
     if( this.nuevo.nombre.trim().length === 0) {
       return;
     }

     this.personajes.push( this.nuevo );
     this.nuevo = {
      nombre: '',
      poder: 0
    }
   }
}
