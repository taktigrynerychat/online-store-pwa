export type EndpointMethod = 'GET' | 'POST' | 'UPDATE';

/* Endpoint metadata. Contains relative path and request type */
export interface EndpointMetadata {
  path: string;
  method: EndpointMethod;
}
/* Known endpoints enumeration */
interface KnownEndpoints {
  getFiltered: EndpointMetadata;
}

/* Endpoints interface. Each of the fields describes endpoint method metadata */
export interface Endpoints extends KnownEndpoints{
  [key: string]: EndpointMetadata;
}
