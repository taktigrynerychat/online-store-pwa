import { EntityState, ID } from '@datorama/akita';
import { Sku } from '../../../models/skus.model';

export interface SkusState extends EntityState<Sku> {
}

export function createInitialState(): SkusState {
  return {};
}
