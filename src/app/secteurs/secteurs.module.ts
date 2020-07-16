import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecteursPageRoutingModule } from './secteurs-routing.module';

import { SecteursPage } from './secteurs.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecteursPageRoutingModule,
   
  ],
  declarations: [SecteursPage]
})
export class SecteursPageModule {}
