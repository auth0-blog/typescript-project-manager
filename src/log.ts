export function Log() {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    // keep a reference to the original function
    let originalFunction = descriptor.value || descriptor.get;

    // wrap the call to the original function to log when it
    function wrapper() {
      let startedAt = +new Date();
      let returnValue = originalFunction.apply(this);
      let endedAt = +new Date();
      console.log(`${propertyKey} executed in ${(endedAt - startedAt)} milliseconds`);
      return returnValue;
    }

    if (descriptor.value) descriptor.value = wrapper;
    else if (descriptor.get) descriptor.get = wrapper;
  };
}
