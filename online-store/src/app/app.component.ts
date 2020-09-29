import { Component } from '@angular/core';
import { SkusService } from './services/api/skus.service';

@Component({
  selector: 'lol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private s: SkusService) {
  }

  sku = this.s.getFilteredSkus({lastChange: new Date()});
  lol = this.s.updateSku(1, {name: 'lol', price: 2111});
  title = 'online-store';
}
