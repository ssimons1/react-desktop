'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _progressCircle = require('../../src/progressCircle/macOs/progressCircle');

var _progressCircle2 = _interopRequireDefault(_progressCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Progress Circle', function () {
  it('create osx progress circle', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_progressCircle2.default, { size: 50 }));
    (0, _chai.expect)(string).to.match(/width: ?50px/);
  });
});

//# sourceMappingURL=progressCircle_mac.js.map