import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [ {
  path:'',
  redirectTo: 'boxeo',
  pathMatch: 'full'
},
  {
    path: '',
    
    component: TabInicialPage, children: [
      
      {
        path: 'boxeo',
        loadChildren: () => import('./../../page/boxeo/boxeo.module').then( m => m.BoxeoPageModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./../../page/editar/editar.module').then( m => m.EditarPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('./../../page/mensajes/mensajes.module').then( m => m.MensajesPageModule)
      },
      {
        path: 'lista',
        loadChildren: () => import('./../../page/lista/lista.module').then( m => m.ListaPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
