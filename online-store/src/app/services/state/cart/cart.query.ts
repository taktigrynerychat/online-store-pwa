import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartState } from './cart.model';
import { CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartQuery extends QueryEntity<CartState> {

  constructor(protected store: CartStore) {
    super(store);
  }

}
