'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _box = require('../../src/box/macOs/box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Box', function () {
  it('create box component with label', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_box2.default, { label: 'My Label' }));
    (0, _chai.expect)(string).to.match(/My Label/);
  });
});

//# sourceMappingURL=box_mac.js.map