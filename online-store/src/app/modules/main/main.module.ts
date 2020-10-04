import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class MainModule { }
