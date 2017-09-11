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
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
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

My_form.propTypes = {
    /**
     * @property {PropTypes.string} background - Sets the background color of a component.
     */
    background: PropTypes.string,
    /**
     * @property {PropTypes.number} height - Sets the height of a component.
     */
    height: PropTypes.number,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    hidden: PropTypes.bool,
    /**
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content
     * Property value "left", "center", "right"
     */
    horizontalAlignment: PropTypes.string,
    /**
     * @property {PropTypes.string} label - Adds a label to the box.
     */
    label: PropTypes.string,
    /**
     * @property {PropTypes.func} margin - Sets the outer margin of a component.
     * E.G. "30px 20px"
     */
    margin: PropTypes.func,
    /**
     * @property {PropTypes.func} marginBottom - Sets the outer margin bottom of a component.
     */
    marginBottom: PropTypes.func,
    /**
     * @property {PropTypes.func} marginLeft - Sets the outer margin left of a component.
     */
    marginLeft: PropTypes.func,
    /**
     * @property {PropTypes.func} marginRight - Sets the outer margin right of a component.
     */
    marginRight: PropTypes.func,
    /**
     * @property {PropTypes.func} marginTop - Sets the outer margin top of a component.
     */
    marginTop: PropTypes.func,
    /**
     * @property {PropTypes.func} padding - Sets the padding inside a component.
     * E.G. "30px 20px"
     */
    padding: PropTypes.func,
    /**
     * @property {PropTypes.func} paddingBottom - Sets the padding bottom inside a component.
     */
    paddingBottom: PropTypes.func,
    /**
     * @property {PropTypes.func} paddingLeft - Sets the padding left inside a component.
     */
    paddingLeft: PropTypes.func,
    /**
     * @property {PropTypes.func} paddingRight - Sets the padding right inside a component.
     */
    paddingRight: PropTypes.func,
    /**
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     */
    paddingTop: [PropTypes.string,PropTypes.number],
    /**
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content.
     * Property value "top", "center", "bottom"
     */
    verticalAlignment: PropTypes.string,
    /**
     * @property {PropTypes.number} width - Sets the width of a component.
     */
    width: PropTypes.number
}

export default Box;
