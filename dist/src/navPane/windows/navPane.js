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

var _pane = require('./pane/pane');

var _pane2 = _interopRequireDefault(_pane);

var _item = require('./item/item');

var _item2 = _interopRequireDefault(_item);

var _windows = require('./style/windows10');

var _windows2 = _interopRequireDefault(_windows);

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warnOnce = false;
function applyChildenClasses() {
  return function (ComposedComponent) {
    var nextItem = _item2.default;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function () {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using NavPane.Item is deprecated, import NavPaneItem instead.');
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(nextItem, [null].concat(args)))();
    };
    return ComposedComponent;
  };
}

/**
 * @description NavPane
 * @example
 *
 * import React, { Component } from 'react';
 * import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   constructor() {
 *     super();
 *     this.state = {
 *       selected: 'Item 1'
 *     }
 *   }
 * 
 *   render() {
 *     return (
 *       <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
 *         {this.renderItem('Item 1', 'Content 1')}
 *         {this.renderItem('Item 2', 'Content 2')}
 *         {this.renderItem('Item 3', 'Content 3')}
 *       </NavPane>
 *     );
 *   }
 * 
 *   renderItem(title, content) {
 *     return (
 *       <NavPaneItem
 *         title={title}
 *         icon={this.renderIcon(title)}
 *         theme="light"
 *         background="#ffffff"
 *         selected={this.state.selected === title}
 *         onSelect={() => this.setState({ selected: title })}
 *         padding="10px 20px"
 *         push
 *       >
 *         <Text>{content}</Text>
 *       </NavPaneItem>
 *     );
 *   }
 * 
 *   renderIcon(name) {
 *     const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
 *     switch(name) {
 *     case 'Item 1':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="14.9px" viewBox="0 0 16 14.9">
 *           <polygon fill={fill} points="16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 "/>
 *         </svg>
 *       );
 *     case 'Item 2':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="13.5px" viewBox="0 0 16 13.5">
 *           <path
 *             fill={fill}
 *             d="M16,4.2C16,1.9,14.1,0,11.7,0c-1.4,0-2.6,0.6-3.4,1.6c0,0,0,0,0,0C8.3,1.7,8.1,1.8,8,1.8
 *             c-0.2,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0C6.8,0.6,5.6,0,4.3,0C1.9,0,0,1.9,0,4.2c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.3
 *             C0,4.8,0.1,5,0.1,5.2c0.3,1.4,1.4,4.1,5.1,6.5c2.1,1.4,2.6,1.8,2.8,1.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.7-0.4,2.8-1.8
 *             c3.5-2.3,4.6-4.8,5-6.3C15.9,5.1,16,4.8,16,4.5C16,4.3,16,4.2,16,4.2L16,4.2C16,4.2,16,4.2,16,4.2z"
 *           />
 *         </svg>
 *       );
 *     case 'Item 3':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 16 15.6">
 *           <path
 *             fill={fill}
 *             d="M14.9,3.2c0.7-0.9,1-1.7,1.1-2.4c0-0.2,0-0.4-0.1-0.5c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1
 *             C15.6,0,15.4,0,15.2,0c-0.7,0-1.6,0.4-2.4,1c-0.7,0.5-1.4,1.2-2.4,2.3C10.2,3.5,10,3.6,9.8,3.8L8.3,3.4L7.9,3.3C8,3.2,8.1,3.1,8.1,3
 *             c0-0.1,0-0.2-0.1-0.3L7.6,2.3C7.5,2.3,7.4,2.2,7.3,2.2c-0.1,0-0.2,0-0.3,0.1L6.5,2.8L6.2,2.8c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3L5.8,1.9C5.7,1.8,5.6,1.8,5.5,1.8c-0.1,0-0.2,0-0.3,0.1L4.7,2.3L2.8,1.8c0,0-0.1,0-0.1,0
 *             c-0.1,0-0.3,0.1-0.4,0.1L1.6,2.6C1.5,2.6,1.5,2.7,1.5,2.8c0,0.1,0.1,0.3,0.2,0.3l4.1,2.2c0,0,0.1,0.1,0.1,0.1L7,6.6
 *             C6,7.7,5,8.8,4.2,9.7C4.2,9.8,4.1,9.9,4,10L0.9,9.7c0,0,0,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2l-0.3,0.3C0,10.3,0,10.4,0,10.5
 *             c0,0.1,0.1,0.3,0.2,0.3l2.2,1c0,0,0.1,0,0.1,0.1l0.2,0.2c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4C2.9,13,3,13.1,3.2,13.1
 *             c0.1,0,0.3,0,0.4-0.1l0.2,0.2c0,0,0,0.1,0.1,0.1l1.1,2.2c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.2,0,0.3-0.1l0.3-0.3C6,15.1,6,14.9,6,14.8
 *             c0,0-0.3-3.1-0.3-3.1c0.1-0.1,0.2-0.1,0.3-0.2c1-0.7,2.1-1.7,3.2-2.7l1.2,1.1c0,0,0.1,0.1,0.1,0.1l2.3,4c0.1,0.1,0.2,0.2,0.3,0.2
 *             c0.1,0,0.2,0,0.3-0.1l0.7-0.7c0.1-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1l-0.5-1.8L13.6,11l0.5-0.4c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-0.1-0.3l0.5-0.5c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L12.1,6c0.2-0.2,0.4-0.4,0.6-0.5
 *             C13.7,4.5,14.4,3.8,14.9,3.2z"
 *           />
 *         </svg>
 *       );
 *     }
 *   }
 * }
 */

var NavPane = (_dec = applyChildenClasses(), _dec2 = (0, _windows3.ColorContext)(), _dec3 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = function (_Component) {
  _inherits(NavPane, _Component);

  function NavPane() {
    _classCallCheck(this, NavPane);

    return _possibleConstructorReturn(this, (NavPane.__proto__ || Object.getPrototypeOf(NavPane)).apply(this, arguments));
  }

  _createClass(NavPane, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _windows2.default.navPane },
        _react2.default.createElement(_pane2.default, {
          items: this.props.children,
          canPaneToggle: this.props.canPaneToggle,
          onPaneToggle: this.props.onPaneToggle,
          defaultIsPaneExpanded: this.props.defaultIsPaneExpanded,
          paneCompactedLength: this.props.paneCompactedLength,
          paneExpandedLength: this.props.paneExpandedLength
        }),
        this.renderContent()
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var content = null;
      _react.Children.map(this.props.children, function (child) {
        if (child.props.selected) content = child;
      });
      return content ? (0, _react.cloneElement)(content, Object.assign({}, content.props, { paneTheme: this.context.theme })) : null;
    }
  }]);

  return NavPane;
}(_react.Component)) || _class) || _class) || _class);
NavPane.propTypes = Object.assign({}, _windows3.colorPropTypes, _windows4.themePropTypes, {
  /**
   * @property {PropTypes.bool} canPaneToggle - Sets whether the pane can be compacted. Default value "true".
   */
  canPaneToggle: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onPaneToggle - Callback function when the pane is expanded or compacted.
   */
  onPaneToggle: _propTypes2.default.func,
  /**
   * @property {PropTypes.string} defaultIsPaneExpanded - Sets whether the pane is expanded by default. Default value "true".
   */
  defaultIsPaneExpanded: _propTypes2.default.bool,
  /**
   * @property {PropTypes.string|PropTypes.number} paneCompactedLength - Sets the length of the pane when compacted. Default value "48px".
   */
  paneCompactedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * @property {PropTypes.string|PropTypes.number} paneExpandedLength - Sets the length of the pane when expanded. Default value "200px".
   */
  paneExpandedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
});
NavPane.contextTypes = Object.assign({}, _windows4.themeContextTypes);
exports.default = NavPane;

//# sourceMappingURL=navPane.js.map