import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartQuery } from '../../services/state/cart/cart.query';
import { CartService } from '../../services/state/cart/cart.service';
import { CartStore } from '../../services/state/cart/cart.store';

@Component({
  selector: 'lol-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartSkus$ = this.cartQuery.skusFromCart$;
  total$ = this.cartQuery.totalCost$;

  constructor(
    private cartService: CartService,
    private cartStore: CartStore,
    private cartQuery: CartQuery,
  ) {
  }

  deleteAll(): void {
    this.cartService.deleteAllSkusFromCart();
  }
}
