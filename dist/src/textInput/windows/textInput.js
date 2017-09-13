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

var _text = require('../../text/windows/text');

var _text2 = _interopRequireDefault(_text);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _windows3 = require('../../style/theme/windows');

var _windows4 = require('../../style/color/windows');

var _windows5 = require('./styles/windows10');

var _windows6 = _interopRequireDefault(_windows5);

var _placeholderStyle = require('../../placeholderStyle');

var _placeholderStyle2 = _interopRequireDefault(_placeholderStyle);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description TextInput
 * @example
 *
 * import React, { Component } from 'react';
 * import { TextInput } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   handleChange = e => console.log(e.target.value);
 * 
 *   render() {
 *     return (
 *       <TextInput
 *         ref="input"
 *         theme={this.props.theme}
 *         color={this.props.color}
 *         background
 *         label="My Input"
 *         placeholder="My Input"
 *         onChange={this.handleChange}
 *       />
 *     );
 *   }
 * }
 */

var TextInput = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _hidden2.default)(), _dec3 = (0, _dimension2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _windows4.ColorContext)(), _dec6 = (0, _windows3.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          labelColor = _props.labelColor,
          labelStyle = _props.labelStyle,
          style = _props.style,
          password = _props.password,
          props = _objectWithoutProperties(_props, ['label', 'labelColor', 'labelStyle', 'style', 'password']);

      var componentStyle = Object.assign({}, _windows6.default.textBox, style);

      if (this.context.theme === 'dark') {
        labelStyle = Object.assign({}, _windows6.default.labalDarkTheme, labelStyle);
        componentStyle = Object.assign({}, componentStyle, _windows6.default.textBoxDarkTheme);
      }

      labelColor = labelColor === true ? this.context.color : labelColor ? labelColor : this.context.theme === 'dark' ? '#FFFFFF' : null;
      if (labelColor) labelStyle = Object.assign({ color: labelColor }, labelStyle);

      componentStyle[':focus'] = Object.assign({}, componentStyle[':focus'], { borderColor: this.context.color });

      props = (0, _windows.removeBackgroundProps)(props);

      var input = _react2.default.createElement(
        _placeholderStyle2.default,
        { placeholderStyle: this.placeholderStyle },
        (0, _windows2.default)(_react2.default.createElement('input', Object.assign({
          type: '' + (password ? 'password' : 'text'),
          style: componentStyle
        }, props)), this.props)
      );

      if (label) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _text2.default,
            { style: Object.assign({ marginBottom: '5px' }, labelStyle), color: this.context.theme === 'dark' ? '#FFFFFF' : null },
            label
          ),
          input
        );
      }
      return input;
    }
  }, {
    key: 'placeholderStyle',
    get: function get() {
      return this.context.theme === 'dark' ? _windows6.default[':placeholderDarkTheme'] : _windows6.default[':placeholder'];
    }
  }]);

  return TextInput;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
TextInput.propTypes = Object.assign({}, _windows3.themePropTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, _margin.marginPropTypes, _windows.backgroundPropTypes, {
  /**
   * @property {PropTypes.string} label - Adds a label to the input.
   */
  label: _propTypes2.default.string,
  /**
   * @property {PropTypes.string|PropTypes.bool} labelColor - Sets whether the label text is colored (bool) or sets the color of the label text (string).
   */
  labelColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  /**
   * @property {PropTypes.object} labelStyle - Custom styles for the label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} password - Sets the input type to password.
   */
  password: _propTypes2.default.bool
});
TextInput.contextTypes = Object.assign({}, _windows3.themeContextTypes, _windows4.colorContextTypes);
exports.default = TextInput;

//# sourceMappingURL=textInput.js.map