import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import context from './context'

const { Provider } = context

export default class Floats extends PureComponent {

  static propTypes = {
    children: propTypes.any,
    panel: propTypes.object,
    popup: propTypes.object,
  }

  static defaultProps = {
    panel: null,
    popup: null
  }

  state = {
    popups: {},
    panels: {}
  }

  getHandles(type) {
    const {[type]: floats} = this.state
    return {
      update: (name, data) => {
        floats[name] = Object.assign(floats[name], {...data})
        this.setState({[type]: {...floats}})
      },
      remove: name => {
        delete floats[name]
        this.setState({[type]: {...floats}})
      },
      open: (name, data = null) => {
        floats[name] = {...data}
        this.setState({[type]: {...floats}})
      }
    }
  }

  getHandlesByName(type, name) {
    const {[type]: floats} = this.state
    return {
      update: data => {
        floats[name] = Object.assign(floats[name], {...data})
        this.setState({[type]: {...floats}})
      },
      remove: () => {
        delete floats[name]
        this.setState({[type]: {...floats}})
      },
      open: (data = null) => {
        floats[name] = {...data}
        this.setState({[type]: {...floats}})
      }
    }
  }

  render() {
    return (
      <Provider value={{
        popups: {...this.state.popups},
        panels: {...this.state.panels},
        getHandles: this.getHandles.bind(this),
        getHandlesByName: this.getHandlesByName.bind(this),
        panel: this.props.panel,
        popup: this.props.popup,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
