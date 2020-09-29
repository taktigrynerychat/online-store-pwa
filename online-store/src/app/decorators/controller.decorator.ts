import { ControllerMetadata } from '../models/api.model';

export function Controller(rest?: ControllerMetadata): any {
  return <T extends new(...args: any[]) => {}>(constructor: T) => {
    return class extends constructor {
      private REST = rest.path;
    };
  };
}
