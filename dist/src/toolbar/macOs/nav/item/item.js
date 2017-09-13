'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _text = require('../../../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '64px'
  },
  iconContainer: {
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '1px'
  }
};

/**
 * @description ToolbarNavItem
 */

var Item = function (_Component) {
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
          style = _props.style,
          selected = _props.selected,
          props = _objectWithoutProperties(_props, ['title', 'icon', 'style', 'selected']);

      return _react2.default.createElement(
        'div',
        { className: '_reactDesktop-Toolbar-Nav-Item-SVG' + (selected ? ' _selected' : '') },
        _react2.default.createElement(
          'a',
          Object.assign({
            style: Object.assign({}, styles.container, style)
          }, props),
          _react2.default.createElement(
            'div',
            { style: styles.iconContainer },
            icon
          ),
          _react2.default.createElement(
            _text2.default,
            { size: '11', color: '#1e1c1e' },
            title
          )
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  /**
   * @property {PropTypes.string} title - Sets the title of the item.
   */
  title: _propTypes2.default.string,
  /**
   * @property {PropTypes.element|PropTypes.array} icon - Sets the icon element of the item.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]),
  /**
   * @property {PropTypes.bool} selected - Sets whether the item is selected or not.
   */
  selected: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onClick - Callback function when the item is pressed.
   */
  onClick: _propTypes2.default.func
};
exports.default = Item;

//# sourceMappingURL=item.js.map