import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EvolveTituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evolve-titulo',
  templateUrl: 'evolve-titulo.html',
})
export class EvolveTituloPage {
  cancionesE=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesE=['1. Next to Me', '2. I Dont Know Why', '3. Whatever it Takes', '4. Believer', '5. Walking the Wire', '6. Rise Up', '7. Ill Make It Up to You', '8. Yesterday', '9. Mouth of the River', '10. Thunder', '11. Start Over','12. Dancing in the Dark'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvolveTituloPage');
  }

}
