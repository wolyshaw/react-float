'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFloat = exports.closeFloat = exports.openFloat = undefined;

var _float = require('./float');

var _float2 = _interopRequireDefault(_float);

var _store = require('./store');

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