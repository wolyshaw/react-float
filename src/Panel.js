import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import propTypes from 'prop-types'
import context from './context'
import './index.css'

const { Consumer } = context

class PopupWraper extends Component {

  static propTypes = {
    component: propTypes.any.isRequired,
    activeFloat: propTypes.object.isRequired,
    handles: propTypes.object.isRequired,
    closed: propTypes.func,
    title: propTypes.string,
    width: propTypes.string,
    mask: propTypes.bool,
    maskClose: propTypes.bool
  }

  static defaultProps = {
    className: 'react-float',
    width: '400px',
    mask: true,
    maskClose: true,
  }

  state = {
    closed: this.props.closed
  }

  wraper = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.wraper)
  }

  componentWillUnmount() {
    const {closed} = this.state
    if(this.wraper) {
      this.wraper.remove()
    }
    if(closed && typeof closed === 'function') {
      closed()
    }
  }

  onMaskClick = () => this.props.maskClose && (this.props.mask || this.props.activeFloat.mask) ? this.props.handles.remove() : null

  clearEvent = e => e.stopPropagation()

  render() {
    const {component: Component, title, width, handles, activeFloat, mask } = this.props
    const hasMask = typeof activeFloat.mask !== 'undefined' ? activeFloat.mask :  mask
    const actTit = activeFloat.title || title
    return createPortal(
      <div className={`react-panel ${hasMask ? 'react-float-mask' : null}`} onClick={this.onMaskClick}>
        <div className="react-panel-container" onClick={this.clearEvent} style={{width: activeFloat.width || width}}>
          {actTit ? (
            <div className="react-panel-header">
              <span>{actTit}</span>
              <span onClick={ handles.remove }>关闭</span>
            </div>
          ) : null}
          <div className="react-panel-content">
            <Component
              {...activeFloat.data}
              closeThisPopup={handles.remove}
              updateThisPopup={handles.update}
            />
          </div>
        </div>
      </div>,
      this.wraper
    )
  }
}

export default class Panel extends Component {

  static propTypes = {
    name: propTypes.string.isRequired,
  }

  render() {
    const {name} = this.props
    return (
      <Consumer>
        {context => {
          const {panels: floats} = context
          const activeFloat = floats[name]
          return (
            <TransitionGroup component={null}>
              {activeFloat ? (
                <CSSTransition timeout={300} classNames="react-panel-move">
                  <PopupWraper
                    {...this.props}
                    context={context}
                    activeFloat={activeFloat}
                    handles={context.getHandlesByName('panels', name)}
                  />
                </CSSTransition>
              ) : null}
            </TransitionGroup>
          )
        }}
      </Consumer>
    )
  }
}
