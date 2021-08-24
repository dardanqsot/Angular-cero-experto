import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input('data') //puedo llamrlo con el nombre q desse y usar ese nombre en corchetes en el tag componente html para rellenarlo
  @Input()
  personajes : Personaje[] = [];
}
