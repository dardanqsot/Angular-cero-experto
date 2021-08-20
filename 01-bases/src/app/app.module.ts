import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [ /// para colocar componentes
    AppComponent
  ],
  imports: [  /// para utilizar otros modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],  //servicios especificos a un module
  bootstrap: [AppComponent] // Componente principal que se lanzara primero
})
export class AppModule { }
