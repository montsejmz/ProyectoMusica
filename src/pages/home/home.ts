import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvolveImagenPage } from '../evolve-imagen/evolve-imagen';
import { EvolveTituloPage } from '../evolve-titulo/evolve-titulo';
import { EvolveArtistaPage } from '../evolve-artista/evolve-artista';
import { EvolveEstrellasPage } from '../evolve-estrellas/evolve-estrellas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eimg=EvolveImagenPage;
  etit=EvolveTituloPage;
  eart=EvolveArtistaPage;
  eest=EvolveEstrellasPage;

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

}
