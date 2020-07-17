import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';
<<<<<<< HEAD

=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    AuthentificationPageRoutingModule
=======
    AuthentificationPageRoutingModule,
    HttpClient
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144
  ],
  declarations: [AuthentificationPage]
})
export class AuthentificationPageModule {}
