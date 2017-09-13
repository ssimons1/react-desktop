'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _toolbar = require('../../src/toolbar/macOs/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Toolbar', function () {
  it('create toolbar component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_toolbar2.default, null));
    (0, _chai.expect)(string).to.match(/<div/);
  });
});

//# sourceMappingURL=toolbar_mac.js.map