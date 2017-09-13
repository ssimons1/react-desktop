'use strict';

var _chai = require('chai');

var _os = require('../../src/os');

var _index = require('../../index');

var components = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('index', function () {
  it('detect os', function () {
    (0, _chai.expect)(components.os()).to.be.oneOf([_os.MACOS, _os.WINDOWS]);
  });

  it('should be exported', function () {
    (0, _chai.expect)(components.Box).to.exist;
    (0, _chai.expect)(components.Button).to.exist;
    (0, _chai.expect)(components.Checkbox).to.exist;
    (0, _chai.expect)(components.Dialog).to.exist;
    (0, _chai.expect)(components.Label).to.exist;
    (0, _chai.expect)(components.Link).to.exist;
    (0, _chai.expect)(components.ListView).to.exist;
    (0, _chai.expect)(components.ListViewFooter).to.exist;
    (0, _chai.expect)(components.ListViewHeader).to.exist;
    (0, _chai.expect)(components.ListViewRow).to.exist;
    (0, _chai.expect)(components.ListViewSection).to.exist;
    (0, _chai.expect)(components.ListViewSectionHeader).to.exist;
    (0, _chai.expect)(components.ListViewSeparator).to.exist;
    (0, _chai.expect)(components.MasterDetailsView).to.exist;
    (0, _chai.expect)(components.NavPane).to.exist;
    (0, _chai.expect)(components.Pin).to.exist;
    (0, _chai.expect)(components.ProgressCircle).to.exist;
    (0, _chai.expect)(components.Radio).to.exist;
    (0, _chai.expect)(components.SearchField).to.exist;
    (0, _chai.expect)(components.SegmentedControl).to.exist;
    (0, _chai.expect)(components.SegmentedControlItem).to.exist;
    (0, _chai.expect)(components.Text).to.exist;
    (0, _chai.expect)(components.TextInput).to.exist;
    (0, _chai.expect)(components.TitleBar).to.exist;
    (0, _chai.expect)(components.Toolbar).to.exist;
    (0, _chai.expect)(components.ToolbarNav).to.exist;
    (0, _chai.expect)(components.ToolbarNavItem).to.exist;
    (0, _chai.expect)(components.View).to.exist;
    (0, _chai.expect)(components.Window).to.exist;
  });
});

//# sourceMappingURL=index.js.map