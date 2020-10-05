import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Sku } from '../../models/skus.model';
import { CartQuery } from '../../services/state/cart/cart.query';
import { CartService } from '../../services/state/cart/cart.service';
import { CartStore } from '../../services/state/cart/cart.store';
import { KeyValueTableItem } from '../page-layout/key-value-table/key-value-table.component';

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
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
  ) {
  }

  deleteAll(): void {
    this.cartService.deleteAllSkusFromCart();
  }

  deleteSku(id: ID): void {
    this.cartService.deleteSkuFromCart(id);
  }

  getCardTable(sku: Sku): KeyValueTableItem[] {
    return [
      {
        key: 'date',
        value: this.datePipe.transform(sku.lastChange, 'dd.MM.yyyy'),
      },
      {
        key: 'category',
        value: sku.parent.name,
      },
      {
        key: 'price',
        value: this.currencyPipe.transform(sku.price, '$'),
      },
    ];
  }

}
