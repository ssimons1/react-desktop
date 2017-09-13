'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _searchField = require('../../src/searchField/macOs/searchField');

var _searchField2 = _interopRequireDefault(_searchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SearchField', function () {
  it('create search field component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_searchField2.default, null));
    (0, _chai.expect)(string).to.match(/<input/);
  });
});

//# sourceMappingURL=searchField_mac.js.map