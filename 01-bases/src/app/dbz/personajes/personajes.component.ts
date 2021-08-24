import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input('data') //puedo llamrlo con el nombre q desse y usar ese nombre en corchetes en el tag componente html para rellenarlo
  //@Input() personajes : Personaje[] = [];
  get personajes() {
    return this.dbzservice.personajes;
  }

  constructor (private dbzservice: DbzService){

  }
}
