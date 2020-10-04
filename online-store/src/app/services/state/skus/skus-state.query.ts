import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Sku } from '../../../models/skus.model';
import { CartQuery } from '../cart/cart.query';
import { CategoriesQuery } from '../categories/categories.query';
import { SkusState } from './skus-state.model';
import { SkusStateStore } from './skus-state.store';

@Injectable({providedIn: 'root'})
export class SkusStateQuery extends QueryEntity<SkusState> {

  constructor(protected store: SkusStateStore,
              protected categoriesQuery: CategoriesQuery,
              protected cartQuery: CartQuery) {
    super(store);
  }

  filteredSkusTable$: Observable<MatTableDataSource<Sku>> = combineLatest([
    this.selectAll().pipe(filter(data => !!data.length)),
    this.categoriesQuery.selectedCategories$,
    this.cartQuery.skusFromCart$
  ]).pipe(
    map(([skus, categories, cartSkus]) => {
      const filtered = skus.filter(sku => {
        return (!categories.length || categories.includes(sku.parent.id)) && !cartSkus.map(i => i.id).includes(sku.id);
      });
      return new MatTableDataSource<Sku>(filtered);
    }),
  );

}
