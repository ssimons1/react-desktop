'use strict';

var _chai = require('chai');

var _os = require('../../src/os');

describe('index', function () {
  it('detect os', function () {
    (0, _chai.expect)(components.os()).to.be.oneOf([_os.MACOS, _os.WINDOWS]);
  });
});

//# sourceMappingURL=os.js.map