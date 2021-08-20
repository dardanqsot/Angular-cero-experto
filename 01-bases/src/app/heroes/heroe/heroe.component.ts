import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad } `;  //contruir un template  - string usando : `` backticks
        //return this.nombre + ' - ' + this.edad.toString()  seria lo mismo que la linea de arriba
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}