import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CtitulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ctitulos',
  templateUrl: 'ctitulos.html',
})
export class CtitulosPage {
  cancionesC=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cancionesC=['1. Sleep On The Floor', '2. Ophelia', '3. Cleopatra', '4. Gun Song', '5. Angela', '6. In The Light',
  '7. Gale Song', '8. Long Way From Home', '9. Sick In The Head', '10. My Eyes', '11. Patience']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CtitulosPage');
  }

}
