'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _text = require('../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _label = require('../../label/macOs/label');

var _label2 = _interopRequireDefault(_label);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _fontSize = require('../../style/fontSize');

var _fontSize2 = _interopRequireDefault(_fontSize);

var _placeholderStyle = require('../../placeholderStyle');

var _placeholderStyle2 = _interopRequireDefault(_placeholderStyle);

var _mapStyles3 = require('../../utils/mapStyles');

var _mapStyles4 = _interopRequireDefault(_mapStyles3);

var _styleHelper = require('../../styleHelper');

var _focusRingAnimation = require('./focusRingAnimation');

var _focusRingAnimation2 = _interopRequireDefault(_focusRingAnimation);

var _centerPlaceholderAnimation = require('./centerPlaceholderAnimation');

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

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
 * import { TextInput } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   handleChange = e => console.log(e.target.value);
 * 
 *   render() {
 *     return (
 *       <TextInput
 *         label="My Input"
 *         placeholder="My Input"
 *         defaultValue=""
 *         onChange={this.handleChange}
 *       />
 *     );
 *   }
 * }
 */

var TextFieldOSX = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _hidden2.default)(), _dec3 = (0, _dimension2.default)(), _dec(_class = _dec2(_class = _dec3(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(TextFieldOSX, _Component);

  function TextFieldOSX() {
    _classCallCheck(this, TextFieldOSX);

    var _this = _possibleConstructorReturn(this, (TextFieldOSX.__proto__ || Object.getPrototypeOf(TextFieldOSX)).call(this));

    _this.handleKeydown = function (e) {
      if (e.keyCode === 8 && e.target.value.length === 1) {
        _this.setState({ showPlaceholder: true });
      }
    };

    _this.handleKeypress = function (e) {
      var noEffect = [0, 13];
      if (e.which === 13 && _this.props.onEnter) {
        _this.props.onEnter(e);
      }

      if (!e.which || noEffect.indexOf(e.which) !== -1) return null;
      if (String.fromCharCode(e.which)) {
        if (_this.state.showPlaceholder) {
          _this.setState({ showPlaceholder: false });
        }
      }
    };

    _this.handleChange = function (e) {
      if (e.target.value && _this.state.showPlaceholder) {
        _this.setState({ showPlaceholder: false });
      } else if (!e.target.value && !_this.state.showPlaceholder) {
        _this.setState({ showPlaceholder: true });
      }
    };

    _this.handleBlur = function (e) {
      if (_this.props.centerPlaceholder) {
        if (!e.target.value) {
          (0, _centerPlaceholderAnimation.pushCenter)(e.target, _reactDom2.default.findDOMNode(_this.refs.label));
        }
      }

      _this.setState({ isFocused: false });
    };

    _this.handleFocus = function (e) {
      if (_this.props.centerPlaceholder) {
        if (!e.target.value) {
          (0, _centerPlaceholderAnimation.pullLeft)(e.target, _reactDom2.default.findDOMNode(_this.refs.label));
        }
      }
      setTimeout(function () {
        return _this.setState({ isFocused: true });
      });
    };

    _this.state = {
      isFocused: false,
      showPlaceholder: true,
      iconPadding: null
    };
    return _this;
  }

  _createClass(TextFieldOSX, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var el = _reactDom2.default.findDOMNode(this).getElementsByTagName('INPUT')[0];
      el.addEventListener('blur', this.handleBlur);
      el.addEventListener('focus', this.handleFocus);
      el.addEventListener('keypress', this.handleKeypress);
      el.addEventListener('keydown', this.handleKeydown);
      el.addEventListener('keyup', this.handleChange);
      el.addEventListener('change', this.handleChange);

      if (this.props.icon) {
        setTimeout(function () {
          return _this2.setState({
            iconPadding: _reactDom2.default.findDOMNode(_this2.refs.icon).getBoundingClientRect().width
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var el = _reactDom2.default.findDOMNode(this).getElementsByTagName('INPUT')[0];
      el.removeEventListener('blur', this.handleBlur);
      el.removeEventListener('focus', this.handleFocus);
      el.removeEventListener('keypress', this.handleKeypress);
      el.removeEventListener('keydown', this.handleKeydown);
      el.removeEventListener('keyup', this.handleChange);
      el.removeEventListener('change', this.handleChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          size = _props.size,
          rounded = _props.rounded,
          focusRing = _props.focusRing,
          placeholder = _props.placeholder,
          centerPlaceholder = _props.centerPlaceholder,
          icon = _props.icon,
          password = _props.password,
          props = _objectWithoutProperties(_props, ['style', 'label', 'size', 'rounded', 'focusRing', 'placeholder', 'centerPlaceholder', 'icon', 'password']);

      delete props.onEnter;

      var _mapStyles = (0, _mapStyles4.default)(style, TextFieldOSX.mapStyles),
          _mapStyles2 = _slicedToArray(_mapStyles, 2),
          inputStyle = _mapStyles2[0],
          containerStyle = _mapStyles2[1];

      var componentStyle = Object.assign({}, _2.default.textField);

      if (rounded) rounded = rounded === true ? '4px' : (0, _styleHelper.parseDimension)(rounded);

      var focusElement = void 0;
      if (this.state.isFocused && focusRing) {
        componentStyle = Object.assign({}, componentStyle, rounded ? _2.default.textFieldRoundedFocus : _2.default.textFieldFocus);

        var focusElementStyle = Object.assign({}, _2.default.focusElement, {
          animation: 'x .25s linear forwards',
          animationName: (0, _focusRingAnimation2.default)(rounded)
        });
        focusElement = _react2.default.createElement('div', { style: focusElementStyle });
      }

      var labelComponent = label ? _react2.default.createElement(
        _label2.default,
        { margin: '0 0 3px 0' },
        label
      ) : null;

      props = (0, _fontSize.removeFontSizeProps)((0, _dimension.removeDimensionProps)((0, _margin.removeMarginProps)((0, _hidden.removeHiddenProps)(props))));

      if (rounded) {
        componentStyle.borderRadius = (0, _styleHelper.parseDimension)(rounded);
      }

      if (size && parseInt(size) !== 13) {
        var ratio = size / 13;
        componentStyle.lineHeight = (0, _styleHelper.parseDimension)(size * 1.4);
        componentStyle.paddingLeft = (0, _styleHelper.parseDimension)(3.5 * ratio);
        componentStyle.paddingRight = (0, _styleHelper.parseDimension)(3.5 * ratio);
      }

      var input = (0, _fontSize2.default)(_react2.default.createElement('input', Object.assign({
        key: 'element',
        ref: 'element',
        type: '' + (password ? 'password' : 'text'),
        style: componentStyle
        // If we're centering the place holder, we don't want to set the `placeholder`
        // property. Otherwise we'll end up with two placeholders.
        , placeholder: !centerPlaceholder ? placeholder : undefined
      }, props)), this.props);

      if (this.state.iconPadding) {
        inputStyle.paddingLeft = (0, _styleHelper.parseDimension)(this.state.iconPadding + 12);
      }

      if (this.context.titlebarChild) {
        inputStyle = Object.assign({}, inputStyle, _2.default.titleBarTextField);
        if (this.state.isFocused && focusRing) {
          inputStyle = Object.assign({}, inputStyle, _2.default.titleBarTextFieldFocus);
        }
      }

      input = (0, _react.cloneElement)(input, Object.assign({}, input.props, { style: Object.assign({}, input.props.style, inputStyle) }));
      var placeholderElement = void 0;

      if (centerPlaceholder) {
        placeholderElement = _react2.default.createElement(
          'div',
          { style: _2.default.label },
          _react2.default.createElement(
            'div',
            { ref: 'label', style: _2.default.labelContent },
            _react2.default.createElement(
              'div',
              { ref: 'icon', style: _2.default.icon },
              icon
            ),
            this.state.showPlaceholder ? _react2.default.createElement(
              _text2.default,
              { color: '#c0c0c0', size: '12' },
              placeholder
            ) : null
          )
        );
      } else if (placeholder) {
        input = _react2.default.createElement(
          _placeholderStyle2.default,
          { placeholderStyle: _2.default.textField[':placeholder'] },
          (0, _react.cloneElement)(input, Object.assign({}, input.props, { style: Object.assign({}, input.props.style, inputStyle), placeholder: placeholder }))
        );
      }

      return (0, _margin2.default)(_react2.default.createElement(
        'div',
        { style: Object.assign({}, _2.default.container, this.state.isFocused ? _2.default.containerFocus : {}, containerStyle) },
        labelComponent,
        _react2.default.createElement(
          'div',
          { style: _2.default.wrapper },
          _react2.default.createElement(
            _radium.StyleRoot,
            null,
            focusElement
          ),
          placeholderElement,
          input
        )
      ), this.props);
    }
  }]);

  return TextFieldOSX;
}(_react.Component)) || _class) || _class) || _class) || _class);
TextFieldOSX.propTypes = Object.assign({}, _hidden.hiddenPropTypes, _margin.marginPropTypes, _dimension.dimensionPropTypes, _fontSize.fontSizePropTypes, {
  /**
   * @property {PropTypes.string} label - Adds a label to the input.
   */
  label: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool|PropTypes.number|PropTypes.string} rounded - Sets the roundness of the input border.
   */
  rounded: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
  /**
   * @property {PropTypes.bool} focusRing - Sets the visibility of the focus ring around the input.
   */
  focusRing: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onEnter - Callback function when the enter key is pressed.
   */
  onEnter: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} centerPlaceholder - Sets whether the placeholder is animated and centered when the input is not focused.
   */
  centerPlaceholder: _propTypes2.default.bool,
  /**
   * @property {PropTypes.element|PropTypes.array} icon - Adds an icon to the input.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]),
  /**
   * @property {PropTypes.string} placeholder - Adds a placeholder to the input.
   */
  placeholder: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} password - Sets the input type to password.
   */
  password: _propTypes2.default.bool
});
TextFieldOSX.defaultProps = {
  focusRing: true
};
TextFieldOSX.mapStyles = {
  container: ['margin', 'width', 'height', 'display']
};
TextFieldOSX.contextTypes = {
  titlebarChild: _propTypes2.default.bool
};
exports.default = TextFieldOSX;

//# sourceMappingURL=textInput.js.map