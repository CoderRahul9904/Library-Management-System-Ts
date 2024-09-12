export function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
    const originalMethod=descriptor.value;
    const adjustableDescriptor: PropertyDescriptor = {
      configurable : true,
      get(){
          const boundFn = originalMethod.bind(this);
          return boundFn;
      }
    }
    return adjustableDescriptor;
  }