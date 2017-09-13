'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _dialog = require('../../src/dialog/macOs/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dialog', function () {
  it('create osx dialog', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_dialog2.default, null));
    (0, _chai.expect)(string).to.match(/div/);
  });
});

//# sourceMappingURL=dialog_mac.js.map