'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

var _minimize = require('./minimize');

var _minimize2 = _interopRequireDefault(_minimize);

var _maximize = require('./maximize');

var _maximize2 = _interopRequireDefault(_maximize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '32px'
  }
};

var Controls = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
  }

  _createClass(Controls, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.controls },
        _react2.default.createElement(_minimize2.default, { onClick: this.props.onMinimizeClick, ref: 'minimize' }),
        _react2.default.createElement(_maximize2.default, { onMaximizeClick: this.props.onMaximizeClick, onRestoreDownClick: this.props.onRestoreDownClick, ref: 'maximize' }),
        _react2.default.createElement(_close2.default, { onClick: this.props.onCloseClick, ref: 'close' })
      );
    }
  }]);

  return Controls;
}(_react.Component);

Controls.propTypes = {
  onCloseClick: _propTypes2.default.func,
  onMinimizeClick: _propTypes2.default.func,
  onRestoreDownClick: _propTypes2.default.func,
  onMaximizeClick: _propTypes2.default.func
};
exports.default = Controls;

//# sourceMappingURL=controls.js.map