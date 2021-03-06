import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvolveImagenPage } from '../evolve-imagen/evolve-imagen';
import { EvolveTituloPage } from '../evolve-titulo/evolve-titulo';
import { EvolveArtistaPage } from '../evolve-artista/evolve-artista';
import { EvolveEstrellasPage } from '../evolve-estrellas/evolve-estrellas';
import { XimagenPage } from '../ximagen/ximagen';
import { XtituloPage } from '../xtitulo/xtitulo';
import { XartistaPage } from '../xartista/xartista';
import { XestrellasPage } from '../xestrellas/xestrellas';
import { HimagenPage } from '../himagen/himagen';
import { HartistaPage } from '../hartista/hartista';
import { HtituloPage } from '../htitulo/htitulo';
import { HestrellasPage } from '../hestrellas/hestrellas';
import { CimagenPage } from '../cimagen/cimagen';
import { CartistasPage } from '../cartistas/cartistas';
import { CtitulosPage } from '../ctitulos/ctitulos';
import { CestrellasPage } from '../cestrellas/cestrellas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eimg=EvolveImagenPage;
  etit=EvolveTituloPage;
  eart=EvolveArtistaPage;
  eest=EvolveEstrellasPage;

  Ximg= XimagenPage;
  Xtit=XtituloPage;
  Xart=XartistaPage;
  Xest=XestrellasPage;
  
  Himg =HimagenPage;
  Hart=HartistaPage;
  Htit=HtituloPage;
  Hest=HestrellasPage;

  Cimg=CimagenPage;
  Cart=CartistasPage;
  Ctit=CtitulosPage;
  Cest=CestrellasPage;

  constructor(public navCtrl: NavController) {
 
  }

  clickEImagen()
  {
    this.navCtrl.push(this.eimg);
  }

  clickEArtista()
  {
    this.navCtrl.push(this.eart);
  }

  clickETitulo()
  {
    this.navCtrl.push(this.etit);
  
  }

  clickEEstrellas()
  {
    this.navCtrl.push(this.eest);
  
  }


  //Segundo album X
  
  clickXImagen()
  {
    this.navCtrl.push(this.Ximg);
  }

  clickXArtista()
  {
    this.navCtrl.push(this.Xart);
  }

  clickXTitulo()
  {
    this.navCtrl.push(this.Xtit);
  
  }

  clickXEstrellas()
  {
    this.navCtrl.push(this.Xest);
  
  }

  //Tercer album

  clickHImagen()
  {
    this.navCtrl.push(this.Himg);
  }

  clickHArtista()
  {
    this.navCtrl.push(this.Hart);
  }

  clickHTitulo()
  {
    this.navCtrl.push(this.Htit);
  
  }

  clickHEstrellas()
  {
    this.navCtrl.push(this.Hest);
  
  }

  //Cuarto Album
  clickCImagen()
  {
    this.navCtrl.push(this.Cimg);
  }

  clickCArtista()
  {
    this.navCtrl.push(this.Cart);
  }

  clickCTitulo()
  {
    this.navCtrl.push(this.Ctit);
  
  }

  clickCEstrellas()
  {
    this.navCtrl.push(this.Cest);
  
  }

}
