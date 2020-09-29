import { EndpointMetadata } from '../models/api.model';

export function RequestMapping(rest?: EndpointMetadata): any {
  return <T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]): any {
      console.log('args', args[0]);
      return originalMethod.apply(
        this,
        [
          !!args[0]
            ? {
              ...args[0],
              path: rest.resolveUrl
                ? `${ this['REST'] }${ resolveUrlPath(rest.path, args[0]) }`
                : `${ this['REST'] }${ rest.path }`,
              method: rest.method,
              paramKeys: Object.keys(args[0])
            }
            : {
              path: `${ this['REST'] }${ rest.path }`,
              method: rest.method,
            },
        ],
      );
    };
    return descriptor;
  };
}

export function resolveUrlPath(path: string, params: any): string {
  Object.keys(params)
    .forEach(param => {
      path = path.replace(`{${ param }}`, params[param]);
    });
  console.log('resolve');
  return path;
}
