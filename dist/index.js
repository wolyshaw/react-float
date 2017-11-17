(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var store = function () {
  function store(float) {
    _classCallCheck(this, store);

    this.float = float || {};
    this.openlist = {};
  }

  _createClass(store, [{
    key: "getStoreByName",
    value: function getStoreByName(name) {
      return this.openlist[name];
    }
  }, {
    key: "getComponentByName",
    value: function getComponentByName(name) {
      return this.float[name];
    }
  }, {
    key: "add",
    value: function add(float) {
      this.openlist[float.name] = float;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.openlist[name];
    }
  }]);

  return store;
}();

exports.default = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _Wraper = __webpack_require__(6);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFloat = exports.closeFloat = exports.openFloat = exports.float = exports.store = undefined;

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _float = __webpack_require__(1);

var _float2 = _interopRequireDefault(_float);

var _operation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.store = _store2.default;
exports.float = _float2.default;
exports.openFloat = _operation.openFloat;
exports.closeFloat = _operation.closeFloat;
exports.removeFloat = _operation.removeFloat;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wraper = function (_PureComponent) {
  _inherits(Wraper, _PureComponent);

  function Wraper(props) {
    var _ref;

    _classCallCheck(this, Wraper);

    return _possibleConstructorReturn(this, (_ref = Wraper.__proto__ || Object.getPrototypeOf(Wraper)).call.apply(_ref, [this].concat(_toConsumableArray(props))));
  }

  _createClass(Wraper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className || 'float-wraper' },
        this.props.mask ? '' : null,
        this.props.children
      );
    }
  }]);

  return Wraper;
}(_react.PureComponent);

exports.default = Wraper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFloat = exports.closeFloat = exports.openFloat = undefined;

var _float = __webpack_require__(1);

var _float2 = _interopRequireDefault(_float);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = new _store2.default();

var openFloat = exports.openFloat = function openFloat() {
  var Store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStore;

  return function (option) {
    var activeFloat = Store.getStoreByName(option.name);
    if (!activeFloat) {
      activeFloat = new _float2.default(option, Store);
      Store.add(activeFloat);
      activeFloat.create();
    }
    activeFloat.open();
  };
};

var closeFloat = exports.closeFloat = function closeFloat() {
  var Store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStore;

  return function (name) {
    var activeFloat = Store.getStoreByName(name);
    activeFloat && activeFloat.close();
  };
};

var removeFloat = exports.removeFloat = function removeFloat() {
  var Store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStore;

  return function (name) {
    var activeFloat = Store.getStoreByName(name);
    activeFloat && activeFloat.remove();
  };
};

/***/ })
/******/ ]);
});