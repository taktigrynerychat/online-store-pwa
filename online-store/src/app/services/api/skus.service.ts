import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiEndpoints } from '../../constants/api.constants';
import { ReqOpt } from '../../models/api.model';
import { Sku } from '../../models/skus.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SkusService {

  constructor(private http: ApiService) {
  }

  getAll(): Observable<Sku[]> {
    return this.http.getResponse(apiEndpoints.getAll).pipe(map(r => r.body));
  }

  getFilteredSkus(): Observable<Sku[]> {
    const options: ReqOpt = {
      body: {},
    };
    return this.http.getResponse<Sku[]>(apiEndpoints.getFiltered, options).pipe(map(r => r.body));
  }

  getSkuById(id: ID): Observable<Sku> {
    const options: ReqOpt = {
      query: {id},
    };
    return this.http.getResponse<Sku>(apiEndpoints.getById, options).pipe(map(r => r.body));
  }
}
