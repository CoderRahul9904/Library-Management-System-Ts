export function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustableDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustableDescriptor;
}