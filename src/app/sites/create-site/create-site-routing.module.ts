import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSitePage } from './create-site.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSitePageRoutingModule {}
