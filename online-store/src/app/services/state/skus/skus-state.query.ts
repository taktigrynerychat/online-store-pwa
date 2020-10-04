import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Sku } from '../../../models/skus.model';
import { CategoriesQuery } from '../categories/categories.query';
import { SkusState } from './skus-state.model';
import { SkusStateStore } from './skus-state.store';

@Injectable({providedIn: 'root'})
export class SkusStateQuery extends QueryEntity<SkusState> {

  constructor(protected store: SkusStateStore,
              protected categoriesQuery: CategoriesQuery) {
    super(store);
  }

  filteredSkusTable$: Observable<MatTableDataSource<Sku>> = combineLatest([
    this.selectAll().pipe(filter(data => !!data.length)),
    this.categoriesQuery.selectedCategories$,
  ]).pipe(
    map(([skus, categories]) => {
      const filtered = skus.filter(sku => !categories.length || categories.includes(sku.parent.id));
      return new MatTableDataSource<Sku>(filtered);
    }),
  );

}
