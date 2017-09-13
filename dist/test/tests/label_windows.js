'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _label = require('../../src/label/windows/label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Label', function () {
  it('create label component with text', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _label2.default,
      null,
      'Hello'
    ));
    (0, _chai.expect)(string).to.match(/Hello/);
  });

  it('create label component with one node', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _label2.default,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Hello'
      )
    ));
    (0, _chai.expect)(string).to.match(/<span.*>Hello/);
  });

  it('create label component with multiple nodes', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _label2.default,
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

//# sourceMappingURL=label_windows.js.map