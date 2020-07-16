import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSecteurPageRoutingModule } from './edit-secteur-routing.module';

import { EditSecteurPage } from './edit-secteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSecteurPageRoutingModule
  ],
  declarations: [EditSecteurPage]
})
export class EditSecteurPageModule {}
