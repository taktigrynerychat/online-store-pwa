import { Endpoints } from '../models/api.model';

export enum SkusEndpoints {
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

export const apiEndpoints: Endpoints = {
  getAll: {
    path: SkusEndpoints.GET_ALL,
    method: ApiMethods.GET
  },
  getFiltered: {
    path: SkusEndpoints.GET_FILTERED,
    method: ApiMethods.POST
  },
  getById: {
    path: SkusEndpoints.GET_BY_ID,
    method: ApiMethods.GET,
    resolveUrl: true
  },
  update: {
    path: SkusEndpoints.UPDATE,
    method: ApiMethods.POST,
    resolveUrl: true
  },
  getWithParent: {
    path: SkusEndpoints.GET_WITH_PARENT,
    method: ApiMethods.GET
  },
  getParents: {
    path: SkusEndpoints.GET_PARENTS,
    method: ApiMethods.GET
  }
};
