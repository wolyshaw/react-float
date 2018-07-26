import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import propTypes from 'prop-types'
import context from './context'
import { getNeedKeys } from './utils'
import './index.less'

const { Consumer } = context

class PanelWraper extends PureComponent {

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
    width: '300px',
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

  onMaskClick = () => this.props.maskClose && this.props.mask  ? this.props.handles.remove() : null

  clearEvent = e => e.stopPropagation()

  render() {
    const {component: Component, title, width, handles, activeFloat, mask, header: Header } = this.props
    return createPortal(
      <div className={`react-panel ${this.props.className} ${mask ? 'react-float-mask' : null}`} onClick={this.onMaskClick}>
        <div className="react-panel-container" onClick={this.clearEvent} style={{width}}>
          <div className="react-panel-move-content">
            {Header ? <Header/> : (
              title ? (
                <div className="react-panel-header">
                  <span>{title}</span>
                  <span onClick={handles.remove}>关闭</span>
                </div>
              ) : null
            )}
            <div className="react-panel-content">
              <Component
                {...activeFloat}
                {...handles}
              />
            </div>
          </div>
        </div>
      </div>,
      this.wraper
    )
  }
}

export default class Panel extends PureComponent {

  static propTypes = {
    name: propTypes.string.isRequired,
  }

  render() {
    const {name} = this.props
    const transition = {
      timeout: 200,
      classNames: 'react-panel-move'
    }
    return (
      <Consumer>
        {context => {
          const {panels: floats} = context
          const activeFloat = floats[name]
          const newProps = Object.assign({}, context.panel, this.props, getNeedKeys(activeFloat))
          return (
            <TransitionGroup component={null}>
              {activeFloat ? (
                <CSSTransition {...Object.assign(transition, newProps.transition)}>
                  <PanelWraper
                    {...newProps}
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
