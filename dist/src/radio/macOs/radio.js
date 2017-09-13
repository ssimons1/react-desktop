'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _text = require('../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Radio
 * @example
 *
 * import React, { Component } from 'react';
 * import { View, Radio } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <View horizontalAlignment="center" direction="column">
 *           <Radio
 *             label="Check me!"
 *             name="radio1"
 *             onChange={(e) => console.log(e.target.value)}
 *             defaultValue="I got checked!"
 *             defaultChecked
 *           />
 *           <Radio
 *             label="Check me!"
 *             name="radio1"
 *             onChange={(e) => console.log(e.target.value)}
 *             defaultValue="I got checked!"
 *           />
 *       </View>
 *     );
 *   }
 * }
 */

var Radio = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _windowFocus2.default)(), _dec3 = (0, _hidden2.default)(), _dec(_class = _dec2(_class = _dec3(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

    _this.onSiblingChange = function () {
      if (_this.refs.element.checked !== _this.state.checked) {
        _this.setState({ checked: _this.refs.element.checked });
      }
    };

    _this.handleChange = function (event) {
      _this.setState({ checked: event.target.checked });
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.state = {
      checked: props.defaultChecked === true,
      transition: true
    };
    return _this;
  }

  _createClass(Radio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('change', this.onSiblingChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('change', this.onSiblingChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isWindowFocused !== this.props.isWindowFocused) {
        this.setState({ transition: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (!this.state.transition) {
        setTimeout(function () {
          return _this2.setState({ transition: true });
        }, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          isWindowFocused = _props.isWindowFocused,
          props = _objectWithoutProperties(_props, ['style', 'label', 'isWindowFocused']);

      var transition = this.state.transition;

      var componentStyle = Object.assign({}, _2.default.radio, style);
      var labelStyle = _2.default.label;
      var circleColor = '#FFFFFF';
      var shadowColor = '#0050a5';

      if (this.state.checked) {
        if (isWindowFocused) {
          componentStyle = Object.assign({}, componentStyle, _2.default['radio:checked']);
          if (!transition) componentStyle.transition = 'none';
        } else {
          componentStyle = Object.assign({}, componentStyle, _2.default['radio:checked:unfocused']);
          circleColor = '#404040';
          shadowColor = '#FFFFFF';
        }
      }

      if ((0, _radium.getState)(this.state, null, ':active')) {
        if (this.state.checked) {
          componentStyle = Object.assign({}, componentStyle, _2.default['radio:checked:active']);
          shadowColor = '#001d99';
        } else {
          componentStyle = Object.assign({}, componentStyle, _2.default['radio:active']);
        }
      }

      return _react2.default.createElement(
        'div',
        { style: _2.default.container },
        _react2.default.createElement(
          'label',
          { style: labelStyle },
          _react2.default.createElement(
            'div',
            { style: _2.default.inputWrapper },
            _react2.default.createElement('input', Object.assign({
              ref: 'element',
              type: 'radio'
            }, props, {
              style: componentStyle,
              onChange: this.handleChange
            })),
            _react2.default.createElement(_circle2.default, { show: this.state.checked, color: circleColor, shadowColor: shadowColor })
          ),
          _react2.default.createElement(
            _text2.default,
            { style: { display: 'inline' } },
            label
          )
        )
      );
    }
  }]);

  return Radio;
}(_react.Component)) || _class) || _class) || _class) || _class);
Radio.propTypes = Object.assign({}, _hidden.hiddenPropTypes, {
  /**
   * @property {PropTypes.string} label - Adds a label to the checkbox.
   */
  label: _propTypes2.default.string,
  /**
   * @property {PropTypes.func} onChange - Callback function when the checkbox has changed.
   */
  onChange: _propTypes2.default.func
});
exports.default = Radio;

//# sourceMappingURL=radio.js.map