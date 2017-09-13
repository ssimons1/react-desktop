'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _text = require('../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Dialog
 * @example
 *
 * import React, { Component } from 'react';
 * import { Dialog, Button } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <Dialog
 *         title="This is a title"
 *         message="This message is inside a dialog component."
 *         icon={this.renderIcon()}
 *         buttons={[
 *           <Button onClick={() => console.log('close this dialog')}>Cancel</Button>,
 *           <Button color="blue" onClick={() => console.log('submit this dialog')}>Submit</Button>,
 *         ]}
 *       />
 *     );
 *   }
 * 
 *   renderIcon() {
 *     return (
 *       <img
 *         src="data:image/png;base64,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"
 *         width="52"
 *         height="52"
 *       />
 *     );
 *   }
 * }
 */

var Dialog = (_dec = (0, _margin2.default)({ marginTop: '17px', marginBottom: '19px', marginLeft: '20px', marginRight: '20px' }), _dec(_class = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'isLast',
    value: function isLast() {
      var isLast = false;

      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      for (var i = 0, len = next.length; i < len; ++i) {
        if (next[i]) isLast = false;
      }
      return isLast;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          style = _props.style,
          title = _props.title,
          message = _props.message,
          children = _props.children,
          buttons = _props.buttons,
          props = _objectWithoutProperties(_props, ['icon', 'style', 'title', 'message', 'children', 'buttons']);

      props = (0, _alignment.removeAlignmentProps)(props);

      return _react2.default.createElement(
        'div',
        Object.assign({ style: Object.assign({}, _2.default.container, style) }, props),
        this.renderIcon(icon),
        _react2.default.createElement(
          'div',
          { style: _2.default.contentContainer },
          this.renderTitle(title, this.isLast(message, children, buttons)),
          this.renderMessage(message, this.isLast(children, buttons)),
          this.renderChildren(children, this.isLast(buttons)),
          this.renderButtons(buttons)
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (icon) {
        return _react2.default.createElement(
          'div',
          { style: _2.default.icon, onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            } },
          icon
        );
      }
      return null;
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(title, isLast) {
      var style = _2.default.title;
      if (isLast) delete style.marginBottom;
      if (title) return _react2.default.createElement(
        _text2.default,
        { bold: true, style: style },
        title
      );
      return null;
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage(message, isLast) {
      var style = _2.default.message;
      if (isLast) delete style.marginBottom;
      if (message) return _react2.default.createElement(
        _text2.default,
        { style: style },
        message
      );
      return null;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(children, isLast) {
      var style = _2.default.content;
      if (isLast) delete style.marginBottom;
      if (children) return (0, _alignment2.default)(_react2.default.createElement(
        'div',
        { style: style },
        children
      ), Object.assign({}, this.props, { layout: 'vertical' }));
      return null;
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(buttons) {
      if (buttons) {
        return _react2.default.createElement(
          'div',
          { style: _2.default.buttons },
          buttons.map(function (button, index) {
            return _react2.default.createElement(
              'div',
              { style: _2.default.buttonContainer, key: index },
              button
            );
          })
        );
      }
      return null;
    }
  }]);

  return Dialog;
}(_react.Component)) || _class);
Dialog.propTypes = Object.assign({}, _margin.marginPropTypes, _alignment.alignmentPropTypes, {
  /**
   * @property {PropTypes.element} icon - Sets the icon element of the component.
   */
  icon: _propTypes2.default.element,
  /**
   * @property {PropTypes.string} title - Sets the title of the component.
   */
  title: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} message - Sets the message of the component.
   */
  message: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]),
  /**
   * @property {PropTypes.array} buttons - Sets the buttons of the component.
   */
  buttons: _propTypes2.default.array
});
exports.default = Dialog;

//# sourceMappingURL=dialog.js.map