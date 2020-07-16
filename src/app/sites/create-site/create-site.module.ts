import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSitePageRoutingModule } from './create-site-routing.module';

import { CreateSitePage } from './create-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSitePageRoutingModule
  ],
  declarations: [CreateSitePage]
})
export class CreateSitePageModule {}
