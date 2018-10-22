import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EvolveImagenPage } from '../pages/evolve-imagen/evolve-imagen';
import { EvolveArtistaPage } from '../pages/evolve-artista/evolve-artista';
import { EvolveEstrellasPage } from '../pages/evolve-estrellas/evolve-estrellas';
import { EvolveTituloPage } from '../pages/evolve-titulo/evolve-titulo';
import { XartistaPage } from '../pages/xartista/xartista';
import { XtituloPage } from '../pages/xtitulo/xtitulo';
import { XestrellasPage } from '../pages/xestrellas/xestrellas';
import { XimagenPage } from '../pages/ximagen/ximagen';
import { HimagenPage } from '../pages/himagen/himagen';
import { HartistaPage } from '../pages/hartista/hartista';
import { HtituloPage } from '../pages/htitulo/htitulo';
import { HestrellasPage } from '../pages/hestrellas/hestrellas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EvolveImagenPage,
    EvolveArtistaPage,
    EvolveEstrellasPage,
    EvolveTituloPage,
    XartistaPage,
    XtituloPage,
    XestrellasPage,
    XimagenPage,
    HimagenPage,
    HartistaPage,
    HtituloPage,
    HestrellasPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EvolveImagenPage,
    EvolveArtistaPage,
    EvolveEstrellasPage,
    EvolveTituloPage,
    XartistaPage,
    XtituloPage,
    XestrellasPage,
    XimagenPage,
    HimagenPage,
    HartistaPage,
    HtituloPage,
    HestrellasPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
