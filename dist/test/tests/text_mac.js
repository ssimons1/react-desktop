'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _text = require('../../src/text/macOs/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text', function () {
  it('create osx text', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _text2.default,
      null,
      'My Text'
    ));
    (0, _chai.expect)(string).to.match(/My Text/);
  });
});

//# sourceMappingURL=text_mac.js.map