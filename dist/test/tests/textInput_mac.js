'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _textInput = require('../../src/textInput/windows/textInput');

var _textInput2 = _interopRequireDefault(_textInput);

var _textInput3 = require('../../src/textInput/macOs/textInput');

var _textInput4 = _interopRequireDefault(_textInput3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextInput', function () {
  describe('Windows', function () {
    it('create text input component with a placeholder', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput2.default, { placeholder: 'Placeholder Text' }));
      (0, _chai.expect)(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput2.default, { defaultValue: 'Default Text' }));
      (0, _chai.expect)(string).to.match(/value="Default Text"/);
    });

    it('should create a password input field', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput2.default, { password: true }));
      (0, _chai.expect)(string).to.match(/type="password"/);
    });
  });

  describe('macOS', function () {
    it('create text input component with a placeholder', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput4.default, { placeholder: 'Placeholder Text' }));
      (0, _chai.expect)(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with a centered placeholder', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput4.default, { centerPlaceholder: true, placeholder: 'Placeholder Text' }));
      (0, _chai.expect)(string).to.match(/Placeholder Text<\/span>/);
      (0, _chai.expect)(string).not.to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput4.default, { defaultValue: 'Default Text' }));
      (0, _chai.expect)(string).to.match(/value="Default Text"/);
    });

    it('should create a password input field', function () {
      var string = (0, _server.renderToString)(_react2.default.createElement(_textInput4.default, { password: true }));
      (0, _chai.expect)(string).to.match(/type="password"/);
    });
  });
});

//# sourceMappingURL=textInput_mac.js.map