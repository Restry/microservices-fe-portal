import BaseFn from './base';

const vueLifecycles = BaseFn();

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
