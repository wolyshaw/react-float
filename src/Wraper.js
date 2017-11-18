import React, { PureComponent } from 'react'


let wraperStyle = { display:'flex', position: 'fixed', overflow: 'hidden', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, .5)', zIndex: '1' }
let containerStyle = { display:'flex', overflowY: 'auto', width: '100%', maxHeight: '100%' }

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
      <div className={ this.props.className } style={ wraperStyle }>
        <span className='float-container' onClick={ this.props.close } style={ containerStyle }>
          <span onClick={ e => e.stopPropagation() } style={{ margin: 'auto'}}>{ this.props.children }</span>
        </span>
      </div>
    )
  }
}
