import { Injectable } from '@angular/core';
import { ID, QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkuParent, SkuParentChip } from '../../../models/skus.model';
import { SkusService } from '../../api/skus.service';
import { CategoriesStore } from './categories.store';
import { CategoriesState } from './category.model';

@Injectable({providedIn: 'root'})
export class CategoriesQuery extends QueryEntity<CategoriesState> {

  constructor(protected store: CategoriesStore) {
    super(store);
  }

  selectedCategories$: Observable<ID[]> = this.select(state => state.selectedChips);

  categoriesForChips$: Observable<SkuParentChip[]> = combineLatest(
    [
      this.selectAll(),
      this.select(state => state.selectedChips),
    ],
  ).pipe(
    map(([categories, selected]) => {
        return categories.map(category => ({...category, selected: selected.includes(category.id)} as SkuParentChip));
      },
    ),
  );

}
