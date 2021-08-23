import { Component} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

   agregar() {
     //event.preventDefault(); /// para prevenir recarga pero solo en javascript recibiendo $event como prametro con angular es mas rápido
     
     console.log("HEY")
   }
}
