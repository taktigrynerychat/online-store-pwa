import { Endpoints } from '../models/api.model';

export enum SkusEndpointsPaths {
  GET_ALL = 'GetAll',
  GET_FILTERED = 'GetFiltered',
  GET_BY_ID = 'GetById/{id}',
  UPDATE = 'Update/{id}',
  GET_WITH_PARENT = 'GetWithParent',
  GET_PARENTS = 'GetParents',
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST'
}

export const SkusEndpoints: Endpoints = {
  getAll: {
    path: SkusEndpointsPaths.GET_ALL,
    method: ApiMethods.GET
  },
  getFiltered: {
    path: SkusEndpointsPaths.GET_FILTERED,
    method: ApiMethods.POST
  },
  getById: {
    path: SkusEndpointsPaths.GET_BY_ID,
    method: ApiMethods.GET,
    resolveUrl: true
  },
  update: {
    path: SkusEndpointsPaths.UPDATE,
    method: ApiMethods.POST,
    resolveUrl: true
  },
  getWithParent: {
    path: SkusEndpointsPaths.GET_WITH_PARENT,
    method: ApiMethods.GET
  },
  getParents: {
    path: SkusEndpointsPaths.GET_PARENTS,
    method: ApiMethods.GET
  }
};
