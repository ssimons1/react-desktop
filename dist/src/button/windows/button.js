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

var _windows = require('../../style/color/windows');

var _windows2 = require('../../style/theme/windows');

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _color = require('../../color');

var _windows3 = require('./styles/windows10');

var _windows4 = _interopRequireDefault(_windows3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Button
 * @example
 *
 * import React, { Component } from 'react';
 * import { Button } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29'
 *   };
 * 
 *   render() {
 *     return (
 *       <Button push color={this.props.color} onClick={() => console.log('Clicked!')}>
 *         Press me!
 *       </Button>
 *     );
 *   }
 * }
 */

var Button = (_dec = (0, _hidden2.default)(), _dec2 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          type = _props.type,
          children = _props.children,
          color = _props.color,
          push = _props.push,
          onClick = _props.onClick,
          props = _objectWithoutProperties(_props, ['style', 'type', 'children', 'color', 'push', 'onClick']);

      var componentStyle = Object.assign({}, _windows4.default.button, style);

      if (color) {
        color = color === true ? this.context.color : color;
        _windows4.default.colorButton = Object.assign({}, _windows4.default.colorButton, {
          borderColor: color,
          backgroundColor: color,
          ':hover': Object.assign({}, _windows4.default.colorButton[':hover'], {
            borderColor: (0, _color.darkenColor)(color, .35)
          }),

          ':active': Object.assign({}, _windows4.default.colorButton[':active'], {
            borderColor: (0, _color.darkenColor)(color, .35),
            backgroundColor: (0, _color.darkenColor)(color, .35)
          })
        });
        componentStyle = Object.assign({}, componentStyle, _windows4.default.colorButton);
      }

      if (push) {
        componentStyle[':active'] = Object.assign({}, componentStyle[':active'], _windows4.default.pushTransform);
      }

      return _react2.default.createElement(
        'button',
        Object.assign({
          ref: 'element',
          type: type || 'button',
          onClick: onClick,
          style: componentStyle
        }, props),
        children
      );
    }
  }]);

  return Button;
}(_react.Component)) || _class) || _class) || _class);
Button.propTypes = Object.assign({}, _hidden.hiddenPropTypes, _windows.colorPropTypes, _windows2.themePropTypes, {
  /**
   * @property {PropTypes.string} type - Sets the type of the button. Property value "button" "submit". Default value "button".
   */
  type: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} push - Display push animation when pressing the button.
   */
  push: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onClick - Callback function when the button is pressed.
   */
  onClick: _propTypes2.default.func
});
Button.contextTypes = Object.assign({}, _windows.colorContextTypes);
exports.default = Button;

//# sourceMappingURL=button.js.map