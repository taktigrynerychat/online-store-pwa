import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { ItemsTableConfigComponent } from './components/items-table-config/items-table-config.component';


@NgModule({
  declarations: [MainComponent, ItemsTableComponent, ItemsTableConfigComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
})
export class MainModule { }
