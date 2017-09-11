import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/10.11';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import { backgroundPropTypes } from '../../style/background/macOs';
import { convertColor, darkenColor } from '../../color';
import Text from '../../text/macOs/text';

@Dimension()
@Margin()
@Padding()
@Alignment()
@Hidden()

class Box extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} background - Sets the background color of a component.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
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
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content. Property value "left", "center", "right".
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content. Property value "top", "center", "bottom".
     */
    ...alignmentPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string} label - Adds a label to the box.
     */
    label: PropTypes.string
  };

  static styleRefs = {
    padding: 'box',
    dimension: 'box'
  };

  render() {
    let { children, style, background, label, ...props } = this.props;
    const hasSegmentedControls = false;

    let componentStyle = { ...styles.box ,...style };
    if (hasSegmentedControls) {
      componentStyle = { ...styles.segmentedControls };
    }

    if (background) {
      background = convertColor(background);
      componentStyle = {
        ...componentStyle,
        backgroundColor: background,
        borderTopColor: darkenColor(background, .3),
        borderLeftColor: darkenColor(background, .24),
        borderRightColor: darkenColor(background, .24),
        borderBottomColor: darkenColor(background, .19)
      };
    }

    if (label) {
      return (
        <div style={styles.wrapper} {...props}>
          <Text margin="0 0 1px 7px" size={11}>{label}</Text>
          <div
            ref="box"
            style={componentStyle}
          >
            {children}
          </div>
        </div>
      );
    }
    componentStyle = { ...styles.wrapper, ...componentStyle };
    return (
      <div
        ref="box"
        style={componentStyle}
        {...props}
      >
        {children}
      </div>

    );
  }
}

export default Box;
