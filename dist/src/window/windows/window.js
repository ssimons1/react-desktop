'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _titleBar = require('../../titleBar/windows/titleBar');

var _titleBar2 = _interopRequireDefault(_titleBar);

var _view = require('../../view/windows/view');

var _view2 = _interopRequireDefault(_view);

var _windows = require('./styles/windows10');

var _windows2 = _interopRequireDefault(_windows);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Window
 * @example
 *
 * import React, { Component } from 'react';
 * import { Window, TitleBar, Text } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   render() {
 *     return (
 *       <Window
 *         color={this.props.color}
 *         theme={this.props.theme}
 *         chrome
 *         height="300px"
 *         padding="12px"
 *       >
 *         <TitleBar title="My Windows Application" controls/>
 *         <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
 *       </Window>
 *     );
 *   }
 * }
 */

var Window = (_dec = (0, _windowFocus2.default)(), _dec2 = (0, _alignment2.default)(), _dec3 = (0, _hidden2.default)(), _dec4 = (0, _dimension2.default)({ width: '100vw', height: '100vh' }), _dec5 = (0, _windows3.ColorContext)(), _dec6 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = function (_Component) {
  _inherits(Window, _Component);

  function Window() {
    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).apply(this, arguments));
  }

  _createClass(Window, [{
    key: 'filterChildren',
    value: function filterChildren() {
      var titleBar = '';
      var otherChildren = [];
      _react.Children.map(this.props.children, function (element) {
        if (element.type === _titleBar2.default) {
          titleBar = element;
        } else {
          otherChildren = [].concat(_toConsumableArray(otherChildren), [element]);
        }
      });

      return [titleBar].concat(_toConsumableArray(otherChildren));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          background = _props.background,
          chrome = _props.chrome,
          isWindowFocused = _props.isWindowFocused,
          props = _objectWithoutProperties(_props, ['style', 'background', 'chrome', 'isWindowFocused']);

      var componentStyle = Object.assign({}, _windows2.default.window, style);
      if (chrome) {
        componentStyle = Object.assign({}, componentStyle, _windows2.default.chrome, {
          borderColor: this.context.color
        });

        if (!isWindowFocused) {
          componentStyle = Object.assign({}, componentStyle, _windows2.default.unfocused);
        }
      }

      if (this.context.theme === 'dark') {
        componentStyle = Object.assign({}, componentStyle, _windows2.default.windowDark);
      }

      if (background) {
        componentStyle = Object.assign({}, componentStyle, { backgroundColor: background });
      }

      var _filterChildren = this.filterChildren(),
          _filterChildren2 = _toArray(_filterChildren),
          titleBar = _filterChildren2[0],
          children = _filterChildren2.slice(1);

      var content = (0, _padding2.default)(_react2.default.createElement(
        _view2.default,
        { ref: 'content', style: _windows2.default.content },
        children
      ), this.props);

      props = (0, _padding.removePaddingProps)(props);
      return _react2.default.createElement(
        'div',
        Object.assign({
          style: componentStyle
        }, props),
        titleBar,
        content
      );
    }
  }]);

  return Window;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class) || _class);
Window.propTypes = Object.assign({}, _windows3.colorPropTypes, _windows4.themePropTypes, _padding.paddingPropTypes, _alignment.alignmentPropTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, {
  /**
   * @property {PropTypes.bool} chrome - Sets the chrome of the window.
   */
  chrome: _propTypes2.default.bool
});
Window.contextTypes = Object.assign({}, _windows3.colorContextTypes, _windows4.themeContextTypes);
exports.default = Window;

//# sourceMappingURL=window.js.map