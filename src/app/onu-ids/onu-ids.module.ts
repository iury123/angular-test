import { OnuIdsRoutingModule } from './onu-ids-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnuIdsComponent } from './onu-ids.component';

@NgModule({
  imports: [CommonModule, OnuIdsRoutingModule],
  declarations: [OnuIdsComponent],
})
export class OnuIdsModule { }
