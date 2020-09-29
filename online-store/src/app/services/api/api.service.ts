import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { EndpointMetadata, ReqOpt, RequestOptions } from '../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /*
      Method sends request to the specified endpoint
     * @param endpoint  Endpoint Metadata.
     * @param body    Request Body.
   */
  getResponse<T = any>(endpoint: EndpointMetadata, options?: ReqOpt): Observable<HttpResponse<T>> {
    const opt = new RequestOptions(
      `${ environment.api }/${ endpoint.path }`,
      {
        query: options?.query,
        body: options?.body,
        headers: options?.headers,
      });
    const req = new HttpRequest(
      endpoint.method,
      opt.url,
      opt.body,
      {
        headers: options?.headers,
      },
    );

    return this.http.request<T>(req)
      .pipe(
        filter(r => r instanceof HttpResponse),
        map(r => r as HttpResponse<T>),
      );
  }
}

