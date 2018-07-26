import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import propTypes from 'prop-types'
import context from './context'
import { getNeedKeys } from './utils'
import './index.less'

const { Consumer } = context

class PopupWraper extends Component {

  static propTypes = {
    component: propTypes.any.isRequired,
    activeFloat: propTypes.object.isRequired,
    handles: propTypes.object.isRequired,
    header: propTypes.any,
    closed: propTypes.func,
    title: propTypes.string,
    width: propTypes.string,
    mask: propTypes.bool,
    maskClose: propTypes.bool,
    className: propTypes.string,
  }

  static defaultProps = {
    className: '',
    width: 'auto',
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

  onMaskClick = () => this.props.maskClose && this.props.mask ? this.props.handles.remove() : null

  clearEvent = e => e.stopPropagation()

  render() {
    const {component: Component, title, width, handles, activeFloat, mask, header: Header } = this.props
    return createPortal(
      <div className={`react-float ${this.props.className} ${mask ? 'react-float-mask' : null}`}>
        <div className="react-float-container" onClick={this.onMaskClick}>
          <div className="react-float-content" onClick={this.clearEvent} style={{width}}>
            {Header ? <Header/> : (
              title ? (
                <div className="react-float-header">
                  <span>{title}</span>
                  <span onClick={ handles.remove }>关闭</span>
                </div>
              ) : null
            )}
            <Component
              {...activeFloat}
              {...handles}
            />
          </div>
        </div>
      </div>,
      this.wraper
    )
  }
}

export default class Popup extends Component {

  static propTypes = {
    name: propTypes.string.isRequired,
  }

  render() {
    const {name} = this.props
    const transition = {
      timeout: 200,
      classNames: 'react-panel-fade'
    }
    return (
      <Consumer>
        {context => {
          const {popups: floats} = context
          const activeFloat = floats[name]
          const newProps = Object.assign({}, context.panel, this.props, getNeedKeys(activeFloat))
          return (
            <TransitionGroup component={null}>
              {activeFloat ? (
                <CSSTransition {...Object.assign(transition, newProps.transition)}>
                  <PopupWraper
                    {...newProps}
                    activeFloat={activeFloat}
                    handles={context.getHandlesByName('popups', name)}
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
