export type EndpointMethod = 'GET' | 'POST' | 'UPDATE';

export interface EndpointMetadata {
  path: string;
  method: EndpointMethod;
}

interface KnownEndpoints {
  getFiltered: EndpointMetadata;
}

export interface Endpoints extends KnownEndpoints{
  [key: string]: EndpointMetadata;
}
