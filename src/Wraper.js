import React, { PureComponent } from 'react'

export default class Wraper extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div className={this.props.className || 'float-wraper'}>
        {this.props.mask ? '' : null}
        {this.props.children}
      </div>
    )
  }
}
