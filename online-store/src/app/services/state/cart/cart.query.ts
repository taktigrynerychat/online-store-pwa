import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Sku } from '../../../models/skus.model';
import { CartState } from './cart.model';
import { CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartQuery extends QueryEntity<CartState> {

  constructor(protected store: CartStore) {
    super(store);
  }

  skusFromCart$: Observable<Sku[]> = this.selectAll();

  cartSkusCount$: Observable<number> = this.selectAll()
    .pipe(map(data => data.length));

  totalCost$: Observable<number> = this.selectAll()
    .pipe(
      map(data => data
        .map(sku => sku.price)
        .reduce((prev, curr) => prev + curr, 0)),
    );
}
