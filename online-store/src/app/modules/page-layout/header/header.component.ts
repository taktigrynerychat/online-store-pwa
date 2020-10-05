import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartQuery } from '../../../services/state/cart/cart.query';

@Component({
  selector: 'lol-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  logo = 'store';
  skusCount$ = this.cartQuery.cartSkusCount$;
  constructor(private cartQuery: CartQuery) {
  }

  ngOnInit(): void {
  }

}
