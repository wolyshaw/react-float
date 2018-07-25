import React, { PureComponent, cloneElement } from 'react'
import context from './context'
import { keyNameAddFix } from './utils'

const { Consumer } = context

export default (type = 'popups') => {
  if(type !== 'popups' && type !== 'panels') {
    type = 'popups'
  }

  let fix = type === 'popups' ? 'Popup' : 'Panel'
  return C => {
    class Element extends PureComponent {

      static displayName = 'withFloat'

      render() {
        return (
          <Consumer>
            {context => cloneElement(<C/>, {...this.props, ...keyNameAddFix(context.getHandles(type), fix)})}
          </Consumer>
        )
      }
    }
    return Element
  }
}
