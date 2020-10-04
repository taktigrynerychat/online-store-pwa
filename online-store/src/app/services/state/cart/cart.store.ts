import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { CartState, createInitialState } from './cart.model';


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'cart'})
export class CartStore extends EntityStore<CartState> {

  constructor() {
    super(createInitialState());
  }

}

