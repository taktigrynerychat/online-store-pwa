import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTableModule,
    MatCheckboxModule,
  ],
})
export class MainModule { }
