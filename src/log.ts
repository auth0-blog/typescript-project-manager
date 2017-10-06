export function Log() {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    // keep a reference to the original function
    let originalFunction = descriptor.value;

    // redefine the function as a wrapper that logs when the
    descriptor.value = function() {
      console.log( `${new Date().toISOString()} - ${propertyKey} started executing`);
      let returnValue = originalFunction.apply(this);
      console.log( `${new Date().toISOString()} - ${propertyKey} finished executing`);
      return returnValue;
    }
  };
}
