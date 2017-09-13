'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _listView = require('../../src/listView/macOs/listView');

var _listView2 = _interopRequireDefault(_listView);

var _footer = require('../../src/listView/macOs/footer/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../src/listView/macOs/header/header');

var _header2 = _interopRequireDefault(_header);

var _row = require('../../src/listView/macOs/row/row');

var _row2 = _interopRequireDefault(_row);

var _section = require('../../src/listView/macOs/section/section');

var _section2 = _interopRequireDefault(_section);

var _header3 = require('../../src/listView/macOs/section/header/header');

var _header4 = _interopRequireDefault(_header3);

var _separator = require('../../src/listView/macOs/separator/separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ListView', function () {
  it('create list view component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_listView2.default, null));
    (0, _chai.expect)(string).to.match(/<section/);
  });

  it('create list view footer component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_footer2.default, null));
    (0, _chai.expect)(string).to.match(/<footer/);
  });

  it('create list view header component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_header2.default, null));
    (0, _chai.expect)(string).to.match(/<header/);
  });

  it('create list view row component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_row2.default, null));
    (0, _chai.expect)(string).to.match(/<li/);
  });

  it('create list view section component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_section2.default, null));
    (0, _chai.expect)(string).to.match(/<section/);
  });

  it('create list view section header component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_header4.default, null));
    (0, _chai.expect)(string).to.match(/<header/);
  });

  it('create list view separator component', function () {
    var string = (0, _server.renderToString)(_react2.default.createElement(_separator2.default, null));
    (0, _chai.expect)(string).to.match(/<hr/);
  });
});

//# sourceMappingURL=listView.js.map