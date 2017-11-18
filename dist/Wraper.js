'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wraperStyle = { display: 'flex', position: 'fixed', overflow: 'hidden', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, .5)', zIndex: '1' };
var containerStyle = { overflowY: 'auto', margin: 'auto' };

var Mask = function Mask(props) {
  return _react2.default.createElement('div', { onClick: props.clickClose && props.close, className: 'float-mask' });
};

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
        { className: this.props.className },
        _react2.default.createElement(
          'span',
          { className: 'float-container', style: wraperStyle, onClick: this.props.close },
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return e.stopPropagation();
              }, style: containerStyle },
            this.props.children
          )
        )
      );
    }
  }]);

  return Wraper;
}(_react.PureComponent);

exports.default = Wraper;