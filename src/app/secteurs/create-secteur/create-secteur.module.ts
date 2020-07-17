import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSecteurPageRoutingModule } from './create-secteur-routing.module';

import { CreateSecteurPage } from './create-secteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSecteurPageRoutingModule
  ],
  declarations: [CreateSecteurPage]
})
export class CreateSecteurPageModule {}
