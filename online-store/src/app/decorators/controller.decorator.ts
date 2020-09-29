import { Injectable } from '@angular/core';
import { ControllerMetadata } from '../models/api.model';

export function Controller(rest?: ControllerMetadata): any {
  return <T extends new(...args: any[]) => {}>(constructor: T) => {
    @Injectable()
    class Tmp extends constructor {
      private REST = rest.path;
    }
    return Tmp;
  };
}
