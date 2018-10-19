import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvolvePage } from '../evolve/evolve';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  evolve = EvolvePage;

  constructor(public navCtrl: NavController) {


  }

  clickEImagen()
  {
    this.navCtrl.push(this.evolve);
  }

}
