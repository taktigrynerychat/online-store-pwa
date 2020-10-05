import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KeyValueTableComponent } from './key-value-table/key-value-table.component';


@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent, FooterComponent, KeyValueTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
  ],
  exports: [
    PageLayoutComponent,
    KeyValueTableComponent
  ],
})
export class PageLayoutModule {
}
