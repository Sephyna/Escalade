import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesPage } from './sites.page';
import { AuthentificationGuard } from '../authentification/authentification.guard';

const routes: Routes = [
  {
    path: '',
    component: SitesPage
  },
  {
    path: 'edit-site',
    loadChildren: () => import('./edit-site/edit-site.module').then( m => m.EditSitePageModule), canLoad : [AuthentificationGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesPageRoutingModule {}
