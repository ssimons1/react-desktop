'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _text = require('../../src/text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _text3 = require('../../src/text/windows/text');

var _text4 = _interopRequireDefault(_text3);

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

  it('create windows text', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _text4.default,
      null,
      'My Text'
    ));
    (0, _chai.expect)(string).to.match(/My Text/);
  });
});

//# sourceMappingURL=text_mac.js.map