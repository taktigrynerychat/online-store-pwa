import { EntityState, ID } from '@datorama/akita';
import { SkuParent } from '../../../models/skus.model';

export interface CategoriesState extends EntityState<SkuParent> {
  selectedChips: ID[];
}

export function createInitialState(): CategoriesState {
  return {
    selectedChips: []
  };
}
