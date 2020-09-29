import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { EndpointMetadata, ReqOpt, RequestData } from '../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /*
     * Method sends request to the specified endpoint;
     * <T> - Response type, <K> - Body keys type (keys which we are using to make a body).
     * @param {RequestData}  Endpoint Metadata.
     * @param body    Request Body.
   */
  getResp<T, K = {}>(requestData: RequestData, paramKeys?: Array<keyof K>): Observable<HttpResponse<T>> {
    const body = {};
    paramKeys && paramKeys.forEach(key => {
      body[key as string] = requestData[key];
    });

    const req = new HttpRequest(
      requestData.method,
      `${ environment.api }${ requestData.path }`,
      body,
    );

    return this.http.request<T>(req)
      .pipe(
        filter(r => r instanceof HttpResponse),
        map(r => r as HttpResponse<T>),
      );
  }
}

