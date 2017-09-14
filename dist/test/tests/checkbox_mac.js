'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _checkbox = require('../../src/checkbox/macOs/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('create osx checkbox', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_checkbox2.default, { label: 'my label' }));
    (0, _chai.expect)(string).to.match(/my label/);
  });
});

//# sourceMappingURL=checkbox_mac.js.map