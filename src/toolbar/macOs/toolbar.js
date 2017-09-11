import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Alignment, { alignmentPropTypes } from '../../style/alignment';

var styles = {
  toolbar: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

@Alignment()
@Dimension({ width: '100%' })

/**
 * @description Toolbar
 * @example
 *
 * import React, { Component } from 'react';
 * import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <TitleBar controls inset>
 *         <Toolbar height="43" horizontalAlignment="center"/>
 *       </TitleBar>
 *     );
 *   }
 * }
 */

class Toolbar extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content. Property value "left", "center", "right".
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content. Property value "top", "center", "bottom".
     */
    ...alignmentPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes
  };

  static childContextTypes = {
    titlebarChild: PropTypes.bool
  };

  getChildContext() {
    return {
      titlebarChild: true
    };
  }

  render() {
    const { style, ...props } = this.props;

    return (
      <div style={{ ...styles.toolbar, ...style }} {...props}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
