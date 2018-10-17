import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvolvePage } from './evolve';

@NgModule({
  declarations: [
    EvolvePage,
  ],
  imports: [
    IonicPageModule.forChild(EvolvePage),
  ],
})
export class EvolvePageModule {}
