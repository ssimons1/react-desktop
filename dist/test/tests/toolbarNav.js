'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _nav = require('../../src/toolbar/macOs/nav/nav');

var _nav2 = _interopRequireDefault(_nav);

var _item = require('../../src/toolbar/macOs/nav/item/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ToolbarNav', function () {
  it('create toolbar nav component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_nav2.default, null));
    (0, _chai.expect)(string).to.match(/<div/);
  });

  it('create toolbar nav item component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_item2.default, null));
    (0, _chai.expect)(string).to.match(/<a/);
  });
});

//# sourceMappingURL=toolbarNav.js.map