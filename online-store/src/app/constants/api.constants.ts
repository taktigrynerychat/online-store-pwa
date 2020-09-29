import { Endpoints } from '../models/api.model';

export enum SkusEndpoints {
  GET_FILTERED = 'GetFiltered'
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE'
}

export const apiEndpoints: Endpoints = {
  getFiltered: {
    path: SkusEndpoints.GET_FILTERED,
    method: ApiMethods.POST,
  },
};
