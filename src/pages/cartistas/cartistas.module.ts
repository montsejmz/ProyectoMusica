import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartistasPage } from './cartistas';

@NgModule({
  declarations: [
    CartistasPage,
  ],
  imports: [
    IonicPageModule.forChild(CartistasPage),
  ],
})
export class CartistasPageModule {}
