'use strict';

var _chai = require('chai');

var _windows = require('../../windows');

describe('Windows', function () {
  it('should be exported', function () {
    (0, _chai.expect)(_windows.Button).to.exist;
    (0, _chai.expect)(_windows.Checkbox).to.exist;
    (0, _chai.expect)(_windows.Label).to.exist;
    (0, _chai.expect)(_windows.MasterDetailsView).to.exist;
    (0, _chai.expect)(_windows.NavPane).to.exist;
    (0, _chai.expect)(_windows.ProgressCircle).to.exist;
    (0, _chai.expect)(_windows.Text).to.exist;
    (0, _chai.expect)(_windows.TextInput).to.exist;
    (0, _chai.expect)(_windows.TitleBar).to.exist;
    (0, _chai.expect)(_windows.View).to.exist;
    (0, _chai.expect)(_windows.Window).to.exist;
  });
});

//# sourceMappingURL=windows.js.map