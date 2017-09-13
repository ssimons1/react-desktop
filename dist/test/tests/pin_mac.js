'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _pin = require('../../src/pin/macOs/pin');

var _pin2 = _interopRequireDefault(_pin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Pin', function () {
  it('create osx pin', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_pin2.default, { length: 1 }));
    (0, _chai.expect)(string).to.match(/input/);
  });
});

//# sourceMappingURL=pin_mac.js.map