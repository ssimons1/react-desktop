import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background, { backgroundPropTypes } from '../../../style/background/macOs';
import Alignment, { alignmentPropTypes } from '../../../style/alignment';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../../style/hidden';
import Margin, { marginPropTypes } from '../../../style/margin';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Background()
@Alignment()
@Dimension()
@Hidden()
@Margin({ marginTop: '4px', marginBottom: '4px' })
@Padding({ paddingLeft: '18px', paddingRight: '18px', paddingTop: '5px', paddingBottom: '5px' })

/**
 * @description ListViewRow
 */

class Row extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} background - Sets the background color of a component.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content. Property value "left", "center", "right".
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content. Property value "top", "center", "bottom".
     */
    ...alignmentPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} marginTop - Sets the outer margin top of a component.
     * @property {PropTypes.string|PropTypes.number} marginLeft - Sets the outer margin left of a component.
     * @property {PropTypes.string|PropTypes.number} marginRight - Sets the outer margin right of a component.
     * @property {PropTypes.string|PropTypes.number} marginBottom - Sets the outer margin bottom of a component.
     */
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingLeft - Sets the padding left inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingRight - Sets the padding right inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingBottom - Sets the padding bottom inside a component.
     */
    ...paddingPropTypes,
    /**
     * @property {PropTypes.string} layout - Sets the direction of the content. Property value "horizontal", "vertical".
     */
    layout: PropTypes.string
  };

  static defaultProps = {
    layout: 'horizontal'
  };

  render() {
    const { horizontalAlignment, children, style, layout, ...props } = this.props;

    let componentStyle = { ...styles.row };

    if (layout === 'vertical') {
      componentStyle.flexDirection = 'column';
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.alignItems = 'center'; break;
        case 'left': componentStyle.alignItems = 'flex-start'; break;
        case 'right': componentStyle.alignItems = 'flex-end'; break;
        }
      }
    } else {
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.justifyContent = 'center'; break;
        case 'left': componentStyle.justifyContent = 'flex-start'; break;
        case 'right': componentStyle.justifyContent = 'flex-end'; break;
        }
      }
    }

    return (
      <li style={{ ...styles.row, ...style }} {...props}>
        {children}
      </li>
    );
  }
}

export default Row;
