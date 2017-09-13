'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundContextTypes = exports.backgroundPropTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.removeBackgroundProps = removeBackgroundProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  if (options[0] && (0, _react.isValidElement)(options[0])) {
    var _dec, _class;

    var BackgroundElement = (_dec = (0, _windows.ColorContext)(true), _dec(_class = (0, _radium2.default)(_class = function (_Component) {
      _inherits(BackgroundElement, _Component);

      function BackgroundElement() {
        _classCallCheck(this, BackgroundElement);

        return _possibleConstructorReturn(this, (BackgroundElement.__proto__ || Object.getPrototypeOf(BackgroundElement)).apply(this, arguments));
      }

      _createClass(BackgroundElement, [{
        key: 'render',
        value: function render() {
          var props = Object.assign({}, options[1]);
          if (typeof props.background === 'boolean') {
            if (!props.background) delete props.background;else if (this.context.color) props.background = this.context.color;else delete props.background;
          }

          options[1] = Object.assign({}, props);
          return (0, _styleHelper2.default)(options, backgroundPropTypes);
        }
      }]);

      return BackgroundElement;
    }(_react.Component)) || _class) || _class);
    BackgroundElement.contextTypes = Object.assign({}, _windows.colorContextTypes);

    return _react2.default.createElement(BackgroundElement, null);
  }

  return function (WrappedComponent) {
    var _dec2, _class2;

    var ComposedComponent = (0, _styleHelper2.default)(options, backgroundPropTypes, null, null, options[0])(WrappedComponent);
    var BackgroundComponent = (_dec2 = (0, _windows.ColorContext)(true), _dec2(_class2 = function (_Component2) {
      _inherits(BackgroundComponent, _Component2);

      function BackgroundComponent() {
        _classCallCheck(this, BackgroundComponent);

        return _possibleConstructorReturn(this, (BackgroundComponent.__proto__ || Object.getPrototypeOf(BackgroundComponent)).apply(this, arguments));
      }

      _createClass(BackgroundComponent, [{
        key: 'render',
        value: function render() {
          var props = Object.assign({}, this.props);
          if (typeof props.background === 'boolean') {
            if (!props.background) delete props.background;else {
              props.background = this.context.color;
            }
          }
          return _react2.default.createElement(ComposedComponent, props);
        }
      }]);

      return BackgroundComponent;
    }(_react.Component)) || _class2);
    BackgroundComponent.contextTypes = Object.assign({}, _windows.colorContextTypes);

    return BackgroundComponent;
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

var _windows = require('../../style/color/windows');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var backgroundPropTypes = exports.backgroundPropTypes = {
  background: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

var backgroundContextTypes = exports.backgroundContextTypes = {
  background: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

function removeBackgroundProps(props) {
  return (0, _styleHelper.extractProps)(props, backgroundPropTypes)[0];
}

//# sourceMappingURL=windows.js.map