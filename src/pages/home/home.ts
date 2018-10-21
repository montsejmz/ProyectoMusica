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
  cancionesE=[];

  

  constructor(public navCtrl: NavController) {
    
    this.cancionesE=['Next to Me', 'I Dont Know Why', 'Whatever it Takes', 'Believer', 'Walking the Wire', 'Rise Up', 'Ill Make It Up to You', 'Yesterday', 'Mouth of the River', 'Thunfer', 'Start Over','Dancing in the Dark'];
    
  

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
