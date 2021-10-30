import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxeoPage } from './boxeo.page';

const routes: Routes = [
  {
    path: '',
    component: BoxeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxeoPageRoutingModule {}
