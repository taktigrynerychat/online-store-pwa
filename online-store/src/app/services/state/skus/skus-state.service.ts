import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sku } from '../../../models/skus.model';
import { SkusService } from '../../api/skus.service';
import { SkusStateStore } from './skus-state.store';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SkusStateService {

  constructor(private skusStateStore: SkusStateStore,
              private skusService: SkusService) {
  }

  getAll(): Observable<Sku[]> {
    return this.skusService.getAll()
      .pipe(
        tap(data => {
            this.skusStateStore.set(data);
          },
        ));
  }
}
