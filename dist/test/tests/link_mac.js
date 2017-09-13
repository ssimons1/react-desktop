'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _link = require('../../src/link/macOs/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link', function () {
  it('create osx link', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(
      _link2.default,
      null,
      'My Link'
    ));
    (0, _chai.expect)(string).to.match(/My Link/);
  });
});

//# sourceMappingURL=link_mac.js.map