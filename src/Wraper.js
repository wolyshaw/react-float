import React, { PureComponent } from 'react'


let wraperStyle = { display:'flex', position: 'fixed', overflow: 'hidden', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, .5)', zIndex: '1' }
let containerStyle = { overflowY: 'auto', margin: 'auto' }

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
        <span className='float-container' style={ wraperStyle } onClick={ this.props.close }>
          <span onClick={ e => e.stopPropagation() } style={ containerStyle }>{ this.props.children }</span>
        </span>
      </div>
    )
  }
}
