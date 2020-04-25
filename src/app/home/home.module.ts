import { HomeRoutingModule } from './home-routing.module';
import { WidgetsModule } from './../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
