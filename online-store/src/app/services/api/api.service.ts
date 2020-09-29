import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { EndpointMetadata } from '../../models/api.model';

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
  getResponse<T = any>(endpoint: EndpointMetadata, body?: any): Observable<HttpResponse<T>> {
    const request = new HttpRequest(
      endpoint.method,
      `${ environment.api }/${ endpoint.path }`,
      body,
    );
    return this.http.request<T>(request)
      .pipe(
        filter(r => r instanceof HttpResponse),
        map(r => r as HttpResponse<T>),
      );
  }
}
