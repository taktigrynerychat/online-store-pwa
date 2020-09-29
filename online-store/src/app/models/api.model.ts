export type EndpointMethod = 'GET' | 'POST' | 'UPDATE';

export interface EndpointMetadata {
  path: string;
  method: EndpointMethod;
}

export interface Endpoints {
  [key: string]: EndpointMetadata;
}
