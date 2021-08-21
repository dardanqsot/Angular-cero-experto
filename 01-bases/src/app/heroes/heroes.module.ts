import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [   /// aqui van los componentes que seran utilizados
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // los componentes o cosas que deseo usar fuera de este módulo
        ListadoComponent
    ],
    imports:[ //Modulos de Angular a usar
        CommonModule ///Ofrece directivas como el ngIf y el ngFor
    ]

})
export class HeroesModule {

}