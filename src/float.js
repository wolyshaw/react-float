import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Wraper from './Wraper'
import styles from './static/float.less'

export default class float {
  constructor(option, Store) {
    let { name, props, component, parentSelect, className, mask, maskClose, spanStyle, floatType } = option
    this.name = name
    this.Store = Store
    this.props = props || {}
    this.mask = mask || true
    this.Component = component
    this.spanStyle = spanStyle || {}
    this.maskClose = maskClose || true
    this.floatType = styles[floatType] || styles['popup']
    this.className = className || styles.wraper
    this.warper = document.createElement('div')
    this.parentSelect = parentSelect || document.body
    this.FloatComponent = Store.getComponentByName(name)
  }

  create() {
    let { FloatComponent, props, Component, className } = this
    let initProps = { close: this.close.bind(this), remove: this.remove.bind(this), className }
    let newProps = Object.assign({}, initProps, props)
    this.warper.classList.add(this.floatType)
    render(
      <Wraper {...newProps} mask={ this.mask } maskClose={ this.maskClose } spanStyle={ this.spanStyle }>
        {Component ? <Component {...newProps} /> : <FloatComponent {...newProps} />}
      </Wraper>,
      this.warper
    )
    this.parentSelect.appendChild(this.warper)
  }

  open() {
    this.warper.style.display = ''
    document.body.style.overflow = 'hidden'
  }

  close() {
    this.warper.style.display = 'none'
    document.body.style.overflow = ''
  }

  remove() {
    if(this.warper) {
      this.warper.remove()
      this.Store.remove(this.name)
      unmountComponentAtNode(this.warper)
    }
  }
}
