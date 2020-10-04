import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Sku } from '../../../models/skus.model';
import { CartStore } from './cart.store';


@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private cartStore: CartStore) {
  }

  addSkusToCart(skus: Sku[]): void {
    this.cartStore.add(skus);
  }

  deleteSkuFromCart(id: ID): void {
    this.cartStore.remove(id);
  }
}
