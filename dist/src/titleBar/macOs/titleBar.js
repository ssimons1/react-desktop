'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controls = require('./controls/controls');

var _controls2 = _interopRequireDefault(_controls);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

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
 * import { View, TitleBar } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { isFullscreen: false };
 *   }
 * 
 *   render() {
 *     return (
 *       <TitleBar
 *         title="untitled text 5"
 *         controls
 *         isFullscreen={this.state.isFullscreen}
 *         onCloseClick={() => console.log('Close window')}
 *         onMinimizeClick={() => console.log('Minimize window')}
 *         onMaximizeClick={() => console.log('Mazimize window')}
 *         onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
 *       />
 *     );
 *   }
 * }
 */

var TitleBar = (_dec = (0, _dimension2.default)({ width: '100%' }), _dec2 = (0, _windowFocus2.default)(), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(TitleBar, _Component);

  function TitleBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TitleBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).call.apply(_ref, [this].concat(args))), _this), _this.resize = function () {
      if (_this.refs.title) {
        var barRect = _this.refs.element.getBoundingClientRect();
        _this.refs.title.style.overflow = 'visible';
        _this.refs.title.style.paddingRight = 0;
        _this.refs.title.style.flexGrow = 0;
        var titleRect = _this.refs.title.getBoundingClientRect();
        _this.refs.title.style.overflow = 'hidden';
        _this.refs.title.style.flexGrow = 1;

        var barWidth = barRect.width - 6;
        var contentWidth = titleRect.width + (_this.props.controls ? 60 : 0);

        var padding = barWidth - contentWidth;
        if (padding > 60) padding = 60;

        _this.refs.title.style.paddingRight = padding + 'px';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TitleBar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        titlebarChild: true
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.resize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          inset = _props.inset,
          controls = _props.controls,
          title = _props.title,
          transparent = _props.transparent,
          isWindowFocused = _props.isWindowFocused,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['children', 'inset', 'controls', 'title', 'transparent', 'isWindowFocused', 'style']);

      delete props.isFullscreen;
      delete props.onCloseClick;
      delete props.onMinimizeClick;
      delete props.onMaximizeClick;
      delete props.onResizeClick;

      var componentStyle = Object.assign({}, _2.default.titleBar);

      var titleStyle = _2.default.title;

      if (inset) {
        componentStyle = Object.assign({}, componentStyle, _2.default.titleBarInset);
      }

      if (!isWindowFocused) {
        componentStyle = Object.assign({}, componentStyle, _2.default.unfocusedTitleBar);
        titleStyle = Object.assign({}, titleStyle, _2.default.unfocusedTitle);
      }

      controls = !controls || _react2.default.createElement(_controls2.default, Object.assign({ ref: 'controls', inset: inset }, this.props));
      title = !title || _react2.default.createElement(
        'div',
        { ref: 'title', style: titleStyle },
        title
      );

      if (transparent) {
        delete componentStyle.backgroundImage;
        delete componentStyle.borderBottomWidth;
        delete componentStyle.borderBottomStyle;
        delete componentStyle.borderBottomColor;
        delete componentStyle.borderTopWidth;
        delete componentStyle.borderTopStyle;
        delete componentStyle.borderTopColor;
        delete componentStyle.borderTopLeftRadius;
        delete componentStyle.borderTopRightRadius;
      }

      return _react2.default.createElement(
        'div',
        Object.assign({
          ref: 'element',
          style: Object.assign({}, componentStyle, style)
        }, props),
        controls,
        title,
        children
      );
    }
  }]);

  return TitleBar;
}(_react.Component)) || _class) || _class);
TitleBar.propTypes = Object.assign({}, _dimension.dimensionPropTypes, {
  /**
   * @property {PropTypes.string} title - Sets the title of the title bar.
   */
  title: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} inset - Sets the controls of the title bar state to be inset.
   */
  inset: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} controls - Sets the visibility of the controls of the title bar.
   */
  controls: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} transparent - Makes the title bar background transparent.
   */
  transparent: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} isFullscreen - Sets the title bar state to fullscreen.
   */
  isFullscreen: _propTypes2.default.bool,
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
   * @property {PropTypes.func} onResizeClick - Callback function of the resize button.
   */
  onResizeClick: _propTypes2.default.func
});
TitleBar.childContextTypes = {
  titlebarChild: _propTypes2.default.bool
};
exports.default = TitleBar;

//# sourceMappingURL=titleBar.js.map