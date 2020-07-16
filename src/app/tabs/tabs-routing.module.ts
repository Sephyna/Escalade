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
         children : [
          {
            path : '',
            loadChildren: () => import('../sites/sites.module').then(m => m.SitesPageModule)
         },

         {
          path: 'secteurs',
          
          loadChildren: () => import('../secteurs/secteurs.module').then( m => m.SecteursPageModule)
          },

           
      
    ]
  },
  
  {
    path: 'profil',
    
    loadChildren: () => import('../secteurs/secteurs.module').then( m => m.SecteursPageModule)
    },
      {
        path: 'contact',
        loadChildren: () => import('../sites/sites.module').then(m => m.SitesPageModule),canLoad : [AuthentificationGuard],
      },
       {
         path: 'deconnexion',
         loadChildren: () => import('../sites/sites.module').then(m => m.SitesPageModule)
       },
      {
        path: 'authentification',
        loadChildren: () => import('../authentification/authentification.module').then( m => m.AuthentificationPageModule)
      },
      {
        path: '',
        redirectTo: 'sites',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
