import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../modules/layout/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', loadChildren: () => import('../modules/index/index.module').then(m => m.IndexModule)},
      {path: 'deliveries', loadChildren: () => import('../modules/deliveries/deliveries.module').then(m => m.DeliveriesModule)},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
