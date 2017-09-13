'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _dimension = require('../../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  nav: {
    display: 'flex',
    alignItems: 'center'
  }
};

/**
 * @description ToolbarNav
 * @example
 *
 * import React, { Component } from 'react';
 * import { TitleBar, Toolbar, ToolbarNav, ToolbarNavItem } from 'react-desktop/macOs';
 * 
 * const circle = (
 *   <svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25">
 *     <circle cx="12.5" cy="12.5" r="12.5"/>
 *   </svg>
 * );
 * 
 * const star = (
 *   <svg x="0px" y="0px" width="25px" height="23.8px" viewBox="0 0 25 23.8">
 *     <polygon points="12.5,0 16.4,7.8 25,9.1 18.8,15.2 20.2,23.8 12.5,19.7 4.8,23.8 6.2,15.2 0,9.1 8.6,7.8 "/>
 *   </svg>
 * );
 * 
 * const polygon = (
 *   <svg x="0px" y="0px" width="25px" height="21.7px" viewBox="0 0 25 21.7">
 *     <polygon points="6.2,21.7 0,10.8 6.2,0 18.8,0 25,10.8 18.8,21.7 "/>
 *   </svg>
 * );
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { selected: 1 };
 *   }
 * 
 *   render() {
 *     return (
 *       <TitleBar>
 *         <Toolbar>
 *           <ToolbarNav>
 *             <ToolbarNavItem
 *               title="Item 1"
 *               icon={circle}
 *               selected={this.state.selected === 1}
 *               onClick={() => this.setState({ selected: 1 })}
 *             />
 *             <ToolbarNavItem
 *               title="Item 2"
 *               icon={star}
 *               selected={this.state.selected === 2}
 *               onClick={() => this.setState({ selected: 2 })}
 *             />
 *             <ToolbarNavItem
 *               title="Item 3"
 *               icon={polygon}
 *               selected={this.state.selected === 3}
 *               onClick={() => this.setState({ selected: 3 })}
 *             />
 *           </ToolbarNav>
 *         </Toolbar>
 *       </TitleBar>
 *     );
 *   }
 * }
 */

var Nav = (_dec = (0, _dimension2.default)({ height: '54px' }), _dec2 = (0, _windowFocus2.default)(), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          isWindowFocused = _props.isWindowFocused,
          props = _objectWithoutProperties(_props, ['children', 'style', 'isWindowFocused']);

      var componentStyle = Object.assign({}, styles.nav);

      var fillOpacity = '.8';
      if (!isWindowFocused) {
        componentStyle.opacity = '.5';
        fillOpacity = '.3';
      }

      return _react2.default.createElement(
        'div',
        Object.assign({ style: Object.assign({}, componentStyle, style) }, props),
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '._reactDesktop-Toolbar-Nav-Item-SVG',
          rules: {
            'a svg *': {
              fill: '#363336',
              fillOpacity: fillOpacity
            },
            'a:active svg *': {
              fill: '#1e1c1e',
              fillOpacity: '.9'
            }
          }
        }),
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '._reactDesktop-Toolbar-Nav-Item-SVG._selected',
          rules: {
            'a svg *': {
              fill: '#007bfa',
              fillOpacity: '1'
            },
            'a:active svg *': {
              fill: '#003dd6',
              fillOpacity: '1'
            }
          }
        }),
        children
      );
    }
  }]);

  return Nav;
}(_react.Component)) || _class) || _class);
Nav.propTypes = Object.assign({}, _dimension.dimensionPropTypes);
exports.default = Nav;

//# sourceMappingURL=nav.js.map