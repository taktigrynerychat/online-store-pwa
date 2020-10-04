import { Injectable } from '@angular/core';
import { createInitialState, SkusState } from './skus-state.model';
import { EntityStore, StoreConfig } from '@datorama/akita';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'skus-state' })
export class SkusStateStore extends EntityStore<SkusState> {

  constructor() {
    super(createInitialState());
  }

}

