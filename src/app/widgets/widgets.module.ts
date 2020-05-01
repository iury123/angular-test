import { HomeRoutingModule } from './../home/home-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent],
})
export class WidgetsModule { }
