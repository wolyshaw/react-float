import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Wraper from './Wraper'

export default class float {
  constructor(option, Store) {
    let { name, props, component, parentSelect, className, mask, maskClose, spanStyle } = option
    this.name = name
    this.props = props
    this.Component = component
    this.parentSelect = parentSelect
    this.className = className || 'float-wraper'
    this.Store = Store
    this.mask = mask || true
    this.maskClose = maskClose || true
    this.spanStyle = spanStyle || {}
    this.warper = document.createElement('div')
    this.FloatComponent = Store.getComponentByName(name)
  }

  create() {
    let { FloatComponent, props, Component, className } = this
    let initProps = { close: this.close.bind(this), remove: this.remove.bind(this), className }
    let newProps = Object.assign({}, initProps, props)
    render(
      <Wraper {...newProps} mask={ this.mask } maskClose={ this.maskClose } spanStyle={ this.spanStyle }>
        {Component ? <Component {...newProps} /> : <FloatComponent {...newProps} />}
      </Wraper>,
      this.warper
    )
    let parent = document.querySelector(this.parentSelect) || document.body
    parent.appendChild(this.warper)
  }

  open() {
    this.warper.style.display = ''
  }

  close() {
    this.warper.style.display = 'none'
  }

  remove() {
    if(this.warper) {
      this.warper.remove()
      this.Store.remove(this.name)
      unmountComponentAtNode(this.warper)
    }
  }
}
