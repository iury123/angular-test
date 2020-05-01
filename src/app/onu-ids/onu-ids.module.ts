import { CustomSelectModule } from './../widgets/custom-select/custom-select.module';
import { OnuIdsRoutingModule } from './onu-ids-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnuIdsComponent } from './onu-ids.component';

@NgModule({
  imports: [
    CommonModule,
    CustomSelectModule,
    OnuIdsRoutingModule],
  declarations: [OnuIdsComponent],
})
export class OnuIdsModule { }
