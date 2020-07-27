import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSitePageRoutingModule } from './create-site-routing.module';

import { CreateSitePage } from './create-site.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    CreateSitePageRoutingModule
  ],
  declarations: [CreateSitePage]
})
export class CreateSitePageModule {}
