import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnuIdsComponent } from './onu-ids.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OnuIdsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class OnuIdsRoutingModule { }
