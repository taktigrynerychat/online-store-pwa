import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiEndpoints } from '../../constants/api.constants';
import { Controller } from '../../decorators/controller.decorator';
import { RequestMapping } from '../../decorators/request-mapping.decorator';
import { RequestData } from '../../models/api.model';
import { Sku, SkuFilter, SkuParent, SkusWithParent, SkuUpdate } from '../../models/skus.model';
import { ApiService } from './api.service';

export abstract class SkusServiceAbstract {
  abstract getAll(requestData?: RequestData): Observable<Sku[]>;

  abstract getFilteredSkus(requestData?: RequestData<SkuFilter>): Observable<Sku[]>;

  abstract getSkuById(requestData?: RequestData<{ id: ID }>): Observable<Sku>;

  abstract updateSku(requestData?: RequestData<SkuUpdate>): Observable<number>;

  abstract getParents(requestData?: RequestData): Observable<SkuParent[]>;

  abstract getWithParent(requestData: RequestData): Observable<SkusWithParent[]>;
}

@Injectable()
@Controller({
  path: 'Values/',
})
export class SkusService extends SkusServiceAbstract {

  constructor(private http: ApiService) {
    super();
  }

  @RequestMapping(apiEndpoints.getAll)
  getAll(requestData: RequestData = {}): Observable<Sku[]> {
    return this.http.getResponse<Sku[]>(requestData).pipe(map(r => r.body));
  }

  @RequestMapping(apiEndpoints.getFiltered)
  getFilteredSkus(requestData: RequestData<SkuFilter>): Observable<Sku[]> {
    return this.http.getResponse<Sku[], SkuFilter>(requestData, requestData.paramKeys).pipe(map(r => r.body));
  }

  @RequestMapping(apiEndpoints.getById)
  getSkuById(requestData: RequestData<{ id: ID }>): Observable<Sku> {
    return this.http.getResponse<Sku>(requestData).pipe(map(r => r.body));
  }

  @RequestMapping(apiEndpoints.update)
  updateSku(requestData: RequestData<SkuUpdate>): Observable<number> {
    return this.http.getResponse<Sku, SkuUpdate>(requestData, ['name', 'price']).pipe(map(r => r.status));
  }

  @RequestMapping(apiEndpoints.getParents)
  getParents(requestData: RequestData = {}): Observable<SkuParent[]> {
    return this.http.getResponse<SkuParent[]>(requestData).pipe(map(r => r.body));
  }

  @RequestMapping(apiEndpoints.getWithParent)
  getWithParent(requestData: RequestData = {}): Observable<SkusWithParent[]> {
    return this.http.getResponse<SkusWithParent[]>(requestData).pipe(map(r => r.body));
  }

}
