import { Component } from '@angular/core';
import { SkusService } from './services/api/skus.service';

@Component({
  selector: 'lol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private s: SkusService) {
  }
  sku = this.s.getAll();
  title = 'online-store';
}
