import { Component} from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }
  ];
  
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
