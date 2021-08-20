import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [ /// para colocar componentes
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [  /// para utilizar otros modulos
    BrowserModule
  ],
  providers: [],  //servicios especificos a un module
  bootstrap: [AppComponent] // Componente principal que se lanzara primero
})
export class AppModule { }
