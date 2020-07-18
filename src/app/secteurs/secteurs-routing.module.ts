import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecteursPage } from './secteurs.page';
import { AuthentificationGuard } from '../authentification/authentification.guard';

const routes: Routes = [
  {
    path: '',
    component: SecteursPage
  },
  {
    path: 'create-secteur',
    loadChildren: () => import('./create-secteur/create-secteur.module').then( m => m.CreateSecteurPageModule), canLoad : [AuthentificationGuard],
  },
  {
    path: 'rating-site',
    loadChildren: () => import('./rating-site/rating-site.module').then( m => m.RatingSitePageModule)
  },
  {
    path: 'edit-secteur',
    loadChildren: () => import('./edit-secteur/edit-secteur.module').then( m => m.EditSecteurPageModule), canLoad : [AuthentificationGuard]
  },
  {
    path: 'edit-site',
    loadChildren: () => import('../sites/edit-site/edit-site.module').then( m => m.EditSitePageModule), canLoad : [AuthentificationGuard]
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecteursPageRoutingModule {}
