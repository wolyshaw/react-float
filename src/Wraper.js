import React, { PureComponent } from 'react'

const Mask = props => {
  return (
    <div onClick={ props.clickClose && props.close } className='float-mask'></div>
  )
}

export default class Wraper extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div className={ this.props.className }>
        <span onClick={ this.props.close }>
          <span onClick={ e => e.stopPropagation() } style={ this.props.spanStyle }>{ this.props.children }</span>
        </span>
      </div>
    )
  }
}
