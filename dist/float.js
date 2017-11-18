'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Wraper = require('./Wraper');

var _Wraper2 = _interopRequireDefault(_Wraper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var float = function () {
  function float(option, Store) {
    _classCallCheck(this, float);

    var name = option.name,
        props = option.props,
        component = option.component,
        parentSelect = option.parentSelect,
        className = option.className;

    this.name = name;
    this.props = props;
    this.Component = component;
    this.parentSelect = parentSelect;
    this.className = className;
    this.Store = Store;
    this.warper = document.createElement('div');
    this.FloatComponent = Store.getComponentByName(name);
  }

  _createClass(float, [{
    key: 'create',
    value: function create() {
      var FloatComponent = this.FloatComponent,
          props = this.props,
          Component = this.Component,
          className = this.className;

      var initProps = { close: this.close.bind(this), remove: this.remove.bind(this), className: className };
      (0, _reactDom.render)(_react2.default.createElement(
        _Wraper2.default,
        initProps,
        Component ? _react2.default.createElement(Component, _extends({}, props, initProps)) : _react2.default.createElement(FloatComponent, _extends({}, props, initProps))
      ), this.warper);
      var parent = document.querySelector(this.parentSelect) || document.body;
      parent.appendChild(this.warper);
    }
  }, {
    key: 'open',
    value: function open() {
      this.warper.style.display = '';
    }
  }, {
    key: 'close',
    value: function close() {
      this.warper.style.display = 'none';
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.warper) {
        this.warper.remove();
        this.Store.remove(this.name);
        (0, _reactDom.unmountComponentAtNode)(this.warper);
      }
    }
  }]);

  return float;
}();

exports.default = float;