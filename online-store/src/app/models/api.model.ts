/* Endpoint request method */
import { HttpHeaders } from '@angular/common/http';

export type EndpointMethod = 'GET' | 'POST' | 'UPDATE';

/* Endpoint metadata. Contains relative path and request type */
export interface EndpointMetadata {
  path: string;
  method: EndpointMethod;
}

/* Known endpoints enumeration */
interface KnownEndpoints {
  getFiltered: EndpointMetadata;
  getById: EndpointMetadata;
  getAll: EndpointMetadata;
}

/* Endpoints interface. Each of the fields describes endpoint method metadata */
export interface Endpoints extends KnownEndpoints {
  [key: string]: EndpointMetadata;
}

export interface ReqOpt {
  query?: any;
  body?: any;
  headers?: HttpHeaders;
}

export class RequestOptions implements ReqOpt {
  // tslint:disable-next-line:variable-name
  private _url: string;

  body?: any;
  query?: any;
  headers?: HttpHeaders;

  public set url(url: string) {
    if (this.query) {
      for (const key of Object.keys(this.query)) {
        console.log([key, this.query[key]]);
        url = url.replace(`{${ key }}`, this.query[key]);
      }
    }
    console.log(url);
    this._url = url;
  }

  public get url(): string {
    return this._url;
  }

  constructor(url: string, options: ReqOpt) {
    this.body = options.body;
    this.query = options.query;
    this.headers = options.headers;
    this.url = url;
  }

}
