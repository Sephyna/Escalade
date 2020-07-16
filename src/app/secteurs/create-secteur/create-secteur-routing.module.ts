import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSecteurPage } from './create-secteur.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSecteurPageRoutingModule {}
