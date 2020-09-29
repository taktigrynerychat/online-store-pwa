import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiEndpoints } from '../../constants/api.constants';
import { Sku } from '../../models/skus.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkusService {

  constructor(private http: ApiService) {
  }

  getFilteredSkus(): Observable<Sku[]> {
    return this.http.getResponse<Sku[]>(apiEndpoints.getFiltered, {}).pipe(map(r => r.body));
  }
}
