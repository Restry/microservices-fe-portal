import { setPublicPath } from 'systemjs-webpack-interop'
import React from 'react'
import ReactDOM from 'react-dom'
import rootComponent from '../index.tsx'

// 注意 Singlespacontext 是一个为react@16.3(如果可用的话)提供的上下文，包含了 singleSpa props
import singleSpaReact, { SingleSpaContext } from 'single-spa-react'

setPublicPath('layout')

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
})

export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount

export default { bootstrap, mount, unmount }
