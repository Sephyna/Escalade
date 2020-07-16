import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingSitePageRoutingModule } from './rating-site-routing.module';

import { RatingSitePage } from './rating-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingSitePageRoutingModule
  ],
  declarations: [RatingSitePage]
})
export class RatingSitePageModule {}
