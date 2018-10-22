import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the XtituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xtitulo',
  templateUrl: 'xtitulo.html',
})
export class XtituloPage {
  cancionesX=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cancionesX=['1. One', '2. Im a Mess', '3. Sing', '4. Dont', '5. Nina', '6. Photograph',
     '7. Bloodstream', '8. Tenerife Sea', '9. Runaway', '10. The Man', '11. Thinking Out Loud', '12. Afire Love',
    '13. Take It Back', '14. Shirtsleeves', '15. Even My Dad Does Sometimes'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XtituloPage');
  }

}
