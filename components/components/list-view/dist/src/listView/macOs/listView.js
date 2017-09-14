'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _macOs = require('../../style/background/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _header = require('./header/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer/footer');

var _footer2 = _interopRequireDefault(_footer);

var _row = require('./row/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description ListView
 * @example
 *
 * import React, { Component } from 'react';
 * import {
 *   ListView,
 *   ListViewHeader,
 *   ListViewFooter,
 *   ListViewSection,
 *   ListViewSectionHeader,
 *   ListViewRow,
 *   ListViewSeparator,
 *   Text
 * } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { selected: null };
 *   }
 * 
 *   render() {
 *     return (
 *       <ListView background="#f1f2f4" width="240" height="200">
 *         <ListViewHeader>
 *           <Text size="11" color="#696969">Order by name</Text>
 *         </ListViewHeader>
 *         <ListViewSection header={this.renderSectionHeader('My Section')}>
 *           {this.renderItem('Item 1', 'This is the first item.')}
 *           {this.renderItem('Item 2', 'This is the second item.')}
 *           {this.renderItem('Item 3', 'This is the third item.')}
 *         </ListViewSection>
 *         <ListViewSeparator/>
 *         <ListViewSection header={this.renderSectionHeader('My Section 2')}>
 *           {this.renderItem('Item 4', 'This is the fourth item.')}
 *           {this.renderItem('Item 5', 'This is the fifth item.')}
 *           {this.renderItem('Item 6', 'This is the sixth item.')}
 *         </ListViewSection>
 *         <ListViewFooter>
 *           <Text size="11" color="#696969">Status</Text>
 *         </ListViewFooter>
 *       </ListView>
 *     );
 *   }
 * 
 *   renderSectionHeader(title) {
 *     return (
 *       <ListViewSectionHeader>
 *         {title}
 *       </ListViewSectionHeader>
 *     );
 *   }
 * 
 *   renderItem(title, info) {
 *     return (
 *       <ListViewRow
 *         onClick={() => this.setState({ selected: title })}
 *         background={this.state.selected === title ? '#d8dadc' : null}
 *       >
 *         <svg x="0px" y="0px" width="18" height="12" viewBox="0 0 18 12" style={{ marginRight: '6px' }}>
 *           <path fill="#727476" d="M13.2,0H4.9L0,6.8v3.7C0,11.3,0.7,12,1.5,12h15
 *     c0.8,0,1.5-0.7,1.5-1.5V6.8L13.2,0z M13.8,6.8L12.3,9L5.9,9L4.2,6.8l-3.1,0l4.2-6h7.4l4.2,6L13.8,6.8z"/>
 *           <polygon fill="#C9CBCD" points="13.8,6.8 12.3,9 5.9,9 4.2,6.8 1.2,6.7 5.4,0.8 12.8,0.8
 *     17,6.7 "/>
 *         </svg>
 *         <Text color="#414141" size="13">{info}</Text>
 *       </ListViewRow>
 *     );
 *   }
 * }
 */

var ListView = (_dec = (0, _macOs2.default)(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _hidden2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _padding2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function (_Component) {
  _inherits(ListView, _Component);

  function ListView() {
    _classCallCheck(this, ListView);

    return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));
  }

  _createClass(ListView, [{
    key: 'mapChildren',
    value: function mapChildren(children) {
      var hasDirectRows = false;
      var header = null,
          items = null,
          footer = null;
      _react.Children.map(children, function (child) {
        if (child.type === _header2.default) return header = child;else if (child.type === _footer2.default) return footer = child;else if (child.type === _row2.default) hasDirectRows = true;

        if (!items) items = [];
        items.push(child);
      });

      if (hasDirectRows) {
        items = _react2.default.createElement(
          'ul',
          { style: _2.default.list },
          items
        );
      }

      return { header: header, items: items, footer: footer };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['children', 'style']);

      var _mapChildren = this.mapChildren(children),
          header = _mapChildren.header,
          items = _mapChildren.items,
          footer = _mapChildren.footer;

      return _react2.default.createElement(
        'section',
        Object.assign({ style: Object.assign({}, _2.default.container, style) }, props),
        header,
        _react2.default.createElement(
          'div',
          { ref: 'scrollable', style: Object.assign({}, _2.default.scrollable) },
          items
        ),
        footer
      );
    }
  }]);

  return ListView;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class);
ListView.propTypes = Object.assign({}, _macOs.backgroundPropTypes, _dimension.dimensionPropTypes, _hidden.hiddenPropTypes, _margin.marginPropTypes, _padding.paddingPropTypes);
exports.default = ListView;

//# sourceMappingURL=listView.js.map