import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthentificationGuard } from '../authentification/authentification.guard';




const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'sites',
        loadChildren: () => import('../sites/sites.module').then(m => m.SitesPageModule)
      },

      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule),canLoad : [AuthentificationGuard]
      },
      {
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then( m => m.InscriptionPageModule)
      },

      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },


      {
        path: '',
        redirectTo: 'sites',
        pathMatch: 'full'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
