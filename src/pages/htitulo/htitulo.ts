import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HtituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-htitulo',
  templateUrl: 'htitulo.html',
})
export class HtituloPage {
  cancionesH=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cancionesH=['1. Take Me To Church', '2. Angel of Small Death & The Codeine Scene', '3. Jackie and Wilson', '4. Someone New', '5. To Be Alone', '6. From Eden', '7. In a Week', '8. Sedated', '9. Work Song',
  '10. Like Real People Do', '11. It Will Come Back', '12. Foreigners God', '13. Cherry Wine - Live']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtituloPage');
  }

}
