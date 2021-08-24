import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService) {}

  agregar() {
    //event.preventDefault(); /// para prevenir recarga pero solo en javascript recibiendo $event como prametro con angular es mas rápido
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
