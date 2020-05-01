import { ManagementComponent } from './../management/management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'management', loadChildren: () => import('../management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'onu-ids', loadChildren: () => import('../onu-ids/onu-ids.module').then(m => m.OnuIdsModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
