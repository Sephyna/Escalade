import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'create-site',
    loadChildren: () => import('./sites/create-site/create-site.module').then( m => m.CreateSitePageModule)
  },
  {
    path: 'create-secteur',
    loadChildren: () => import('./secteurs/create-secteur/create-secteur.module').then( m => m.CreateSecteurPageModule)
  }
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
