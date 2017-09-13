'use strict';

var _chai = require('chai');

var _color = require('../../src/color');

var Color = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Color', function () {
  describe('#colorLuminance', function () {});

  describe('#hexToRgb', function () {
    it('works', function () {
      (0, _chai.expect)(Color.hexToRgb('#000000')).to.deep.equal({ r: 0, g: 0, b: 0 });
      (0, _chai.expect)(Color.hexToRgb('#1883d7')).to.deep.equal({ r: 24, g: 131, b: 215 });
      (0, _chai.expect)(Color.hexToRgb('#ffffff')).to.deep.equal({ r: 255, g: 255, b: 255 });
      (0, _chai.expect)(Color.hexToRgb('#000')).to.deep.equal({ r: 0, g: 0, b: 0 });
      (0, _chai.expect)(Color.hexToRgb('#fff')).to.deep.equal({ r: 255, g: 255, b: 255 });
    });
  });

  describe('#transparentize', function () {
    it('works', function () {
      (0, _chai.expect)(Color.transparentize('#000000', 0)).to.deep.equal('rgba(0, 0, 0, 1)');
      (0, _chai.expect)(Color.transparentize('#000000', 0.4)).to.deep.equal('rgba(0, 0, 0, 0.6)');
      (0, _chai.expect)(Color.transparentize('#000000', 0.7)).to.deep.equal('rgba(0, 0, 0, 0.3)');
      (0, _chai.expect)(Color.transparentize('#000000', 1)).to.deep.equal('rgba(0, 0, 0, 0)');
    });
  });

  describe('#darkenColor', function () {});

  describe('#ligthenColor', function () {});

  describe('#convertColor', function () {
    it('works', function () {
      (0, _chai.expect)(Color.convertColor('white')).to.equal('#ffffff');
      (0, _chai.expect)(Color.convertColor('blue')).to.equal('#0000ff');
      (0, _chai.expect)(Color.convertColor('black')).to.equal('#000000');
    });
  });

  describe('#isDarkColor', function () {
    it('works', function () {
      (0, _chai.expect)(Color.isDarkColor('#000000')).to.be.true;
      (0, _chai.expect)(Color.isDarkColor('#ffffff')).to.be.false;
    });
  });
});

//# sourceMappingURL=color.js.map