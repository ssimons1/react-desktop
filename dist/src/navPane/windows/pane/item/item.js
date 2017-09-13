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

var _windows = require('../style/windows10');

var _windows2 = _interopRequireDefault(_windows);

var _color = require('../../../../color');

var _windows3 = require('../../../../style/color/windows');

var _windows4 = require('../../../../style/theme/windows');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (_dec = (0, _windows3.ColorContext)(), _dec2 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          icon = _props.icon,
          selected = _props.selected,
          onSelect = _props.onSelect,
          push = _props.push,
          isPaneExpanded = _props.isPaneExpanded;


      var componentStyle = _windows2.default.anchor;
      var spanStyle = _windows2.default.span;

      if (this.context.theme === 'dark') {
        componentStyle = Object.assign({}, componentStyle, _windows2.default.anchorDark);
        spanStyle = Object.assign({}, spanStyle, _windows2.default.spanDark);
      }

      if (selected) {
        componentStyle = Object.assign({}, componentStyle, {
          backgroundColor: (0, _color.transparentize)(this.context.color, .4),
          ':hover': Object.assign({}, componentStyle[':hover'], {
            backgroundColor: (0, _color.transparentize)(this.context.color, .2)
          }),
          ':active': Object.assign({}, componentStyle[':active'], {
            backgroundColor: (0, _color.transparentize)(this.context.color, .1)
          })
        });
      }

      if (push) {
        spanStyle[':hover'] = Object.assign({}, spanStyle[':hover'], _windows2.default.pushTransformHover);
        spanStyle[':active'] = Object.assign({}, spanStyle[':active'], _windows2.default.pushTransformActive);
      }

      return _react2.default.createElement(
        'a',
        {
          onClick: onSelect,
          style: componentStyle
        },
        _react2.default.createElement(
          'span',
          {
            ref: 'span',
            style: spanStyle
          },
          icon ? _react2.default.createElement(
            'i',
            { style: _windows2.default.anchorIcon },
            icon
          ) : null,
          isPaneExpanded ? _react2.default.createElement(
            'span',
            { style: _windows2.default.anchorTitle },
            title
          ) : null
        )
      );
    }
  }]);

  return Item;
}(_react.Component)) || _class) || _class) || _class);
Item.propTypes = {
  isPaneExpanded: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  push: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  selected: _propTypes2.default.bool
};
Item.contextTypes = Object.assign({}, _windows3.colorContextTypes, _windows4.themeContextTypes);
exports.default = Item;

//# sourceMappingURL=item.js.map