import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SkuParent } from '../../../models/skus.model';
import { removeItemFromArr } from '../../../utils/array.utils';
import { SkusService } from '../../api/skus.service';
import { CategoriesStore } from './categories.store';
import { CategoriesQuery } from './categories.query';

@Injectable({providedIn: 'root'})
export class CategoriesService {

  constructor(private categoriesStore: CategoriesStore,
              private categoriesQuery: CategoriesQuery,
              private skusApiService: SkusService) {
  }

  getCategories(): Observable<SkuParent[]> {
    return this.skusApiService.getParents().pipe(
      tap(data => {
        this.categoriesStore.set(data);
      }),
    );
  }

  updateSelectedChips(selected: ID): void {
    this.categoriesStore.update(state => {
      let newState;
      if (state.selectedChips.includes(selected)) {
        newState = removeItemFromArr([...state.selectedChips], selected);
      } else {
        newState = [...state.selectedChips, selected];
      }
      return {
        ...state,
        selectedChips: newState,
      };
    });
  }

}


