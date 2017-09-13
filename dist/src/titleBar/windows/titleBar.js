'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _hidden = require('../../style/hidden');

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _controls = require('./controls/controls');

var _controls2 = _interopRequireDefault(_controls);

var _windows5 = require('./styles/windows10');

var _windows6 = _interopRequireDefault(_windows5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description TitleBar
 * @example
 *
 * import React, { Component } from 'react';
 * import { TitleBar } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = { isMaximized: true };
 *   }
 * 
 *   close = () => console.log('close');
 *   minimize = () => console.log('minimize');
 *   toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });
 * 
 *   render() {
 *     return (
 *       <TitleBar
 *         title="My Windows Application"
 *         controls
 *         isMaximized={this.state.isMaximized}
 *         theme={this.props.theme}
 *         background={this.props.color}
 *         onCloseClick={this.close}
 *         onMinimizeClick={this.minimize}
 *         onMaximizeClick={this.toggleMaximize}
 *         onRestoreDownClick={this.toggleMaximize}
 *       />
 *     );
 *   }
 * }
 */

var TitleBar = (_dec = (0, _windows2.default)(function (nextProps, prevProps, background) {
  return Object.assign({}, nextProps, { hasBackground: background });
}), _dec2 = (0, _windowFocus2.default)(), _dec3 = (0, _windows4.ThemeContext)(), _dec4 = (0, _windows3.ColorContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_Component) {
  _inherits(TitleBar, _Component);

  function TitleBar() {
    _classCallCheck(this, TitleBar);

    return _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).apply(this, arguments));
  }

  _createClass(TitleBar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isMaximized: this.props.isMaximized
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          controls = _props.controls,
          title = _props.title,
          isWindowFocused = _props.isWindowFocused,
          hasBackground = _props.hasBackground,
          hidden = _props.hidden,
          props = _objectWithoutProperties(_props, ['children', 'style', 'controls', 'title', 'isWindowFocused', 'hasBackground', 'hidden']);

      delete props.isMaximized;
      delete props.onCloseClick;
      delete props.onMinimizeClick;
      delete props.onMaximizeClick;
      delete props.onRestoreDownClick;

      var componentStyle = Object.assign({}, _windows6.default.titleBar, style);
      var titleStyle = _windows6.default.title;

      if (!isWindowFocused && this.context.theme !== 'dark') {
        titleStyle = Object.assign({}, titleStyle, _windows6.default.unfocusedTitle);
      }

      if (this.context.theme === 'dark') {
        titleStyle = Object.assign({}, titleStyle, _windows6.default.titleDark);
      }

      componentStyle = Object.assign({}, componentStyle, {
        visibility: !hidden ? 'visible' : 'hidden',
        display: !hidden ? 'flex' : 'none'
      });

      if (this.context.theme === 'dark') {
        componentStyle = Object.assign({}, componentStyle, _windows6.default.titleBarDark);
      }

      var controlsComponent = !controls || _react2.default.createElement(_controls2.default, this.props);
      var titleComponent = !title || _react2.default.createElement(
        'div',
        { style: titleStyle },
        this.props.title
      );

      if (hasBackground) delete componentStyle.backgroundColor;

      return _react2.default.createElement(
        'div',
        Object.assign({
          ref: 'element',
          style: componentStyle
        }, props),
        titleComponent,
        controlsComponent,
        children
      );
    }
  }]);

  return TitleBar;
}(_react.Component)) || _class) || _class) || _class) || _class);
TitleBar.propTypes = Object.assign({}, _hidden.hiddenPropTypes, _windows4.themePropTypes, _windows3.colorPropTypes, _windows.backgroundPropTypes, {
  /**
   * @property {PropTypes.string} title - Sets the title of the title bar.
   */
  title: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} controls - Sets the visibility of the controls of the title bar.
   */
  controls: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} isMaximized - Sets the title bar state to maximized.
   */
  isMaximized: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onCloseClick - Callback function of the close button.
   */
  onCloseClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onMinimizeClick - Callback function of the minimize button.
   */
  onMinimizeClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onMaximizeClick - Callback function of the maximize button.
   */
  onMaximizeClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRestoreDownClick - Callback function of the restore down button.
   */
  onRestoreDownClick: _propTypes2.default.func
});
TitleBar.childContextTypes = {
  isMaximized: _propTypes2.default.bool
};
TitleBar.contextTypes = Object.assign({}, _windows4.themeContextTypes);
exports.default = TitleBar;

//# sourceMappingURL=titleBar.js.map