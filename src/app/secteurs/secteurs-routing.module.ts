import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecteursPage } from './secteurs.page';

const routes: Routes = [
  {
    path: '',
    component: SecteursPage
  },
  {
    path: 'create-secteur',
    loadChildren: () => import('./create-secteur/create-secteur.module').then( m => m.CreateSecteurPageModule)
  },
  {
    path: 'rating-site',
    loadChildren: () => import('./rating-site/rating-site.module').then( m => m.RatingSitePageModule)
  },
  {
    path: 'edit-secteur',
    loadChildren: () => import('./edit-secteur/edit-secteur.module').then( m => m.EditSecteurPageModule)
  },
  {
    path: 'edit-site',
    loadChildren: () => import('../sites/edit-site/edit-site.module').then( m => m.EditSitePageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecteursPageRoutingModule {}
