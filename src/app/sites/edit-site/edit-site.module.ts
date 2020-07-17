import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSitePageRoutingModule } from './edit-site-routing.module';

import { EditSitePage } from './edit-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSitePageRoutingModule
  ],
  declarations: [EditSitePage]
})
export class EditSitePageModule {}
