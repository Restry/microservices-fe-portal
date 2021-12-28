import BaseFn from './base';
import '../styles/normalize.css';
import '../styles/common.less';

const vueLifecycles = BaseFn();

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
