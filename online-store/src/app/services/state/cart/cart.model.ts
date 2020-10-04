import { EntityState } from '@datorama/akita';
import { Sku } from '../../../models/skus.model';

export interface CartState extends EntityState<Sku> {
}

export function createInitialState(): CartState {
  return {};
}
