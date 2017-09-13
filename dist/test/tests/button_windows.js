'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _button = require('../../src/button/windows/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  it('create button component with text', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _button2.default,
      null,
      'Hello'
    ));
    (0, _chai.expect)(string).to.match(/Hello/);
  });

  it('create button component with one node', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _button2.default,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Hello'
      )
    ));
    (0, _chai.expect)(string).to.match(/<span.*>Hello/);
  });

  it('create button component with multiple nodes', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _button2.default,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Hello'
      ),
      _react2.default.createElement(
        'span',
        null,
        'World'
      )
    ));
    (0, _chai.expect)(string).to.match(/<span.*>Hello/);
    (0, _chai.expect)(string).to.match(/<span.*>World/);
  });
});

//# sourceMappingURL=button_windows.js.map