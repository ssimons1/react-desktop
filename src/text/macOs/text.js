import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import TextAlign, { textAlignPropTypes } from '../../style/textAlign';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import styles from './styles/10.11';

@Background()
@Alignment()
@Margin()
@Padding()
@FontSize()
@Dimension()
@TextAlign()
@Hidden()

/**
 * @description Text
 * @example
 *
 * import React, { Component } from 'react';
 * import { Label } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <Label>My Label</Label>
 *     );
 *   }
 * }
 */

class Text extends Component {
  static propTypes = {
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
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    ...textAlignPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} marginTop - Sets the outer margin top of a component.
     * @property {PropTypes.string|PropTypes.number} marginLeft - Sets the outer margin left of a component.
     * @property {PropTypes.string|PropTypes.number} marginRight - Sets the outer margin right of a component.
     * @property {PropTypes.string|PropTypes.number} marginBottom - Sets the outer margin bottom of a component.
     */
    ...marginPropTypes,
    ...fontSizePropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string} color - Sets the color of the text.
     */
    color: PropTypes.string,
    bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    color: '#000000'
  };

  render() {
    const { color, children, style, bold, ...props } = this.props;

    let componentStyle = { ...styles.text, color };
    if (bold && bold === true) {
      componentStyle = { ...componentStyle, fontWeight: 'bold' };
    } else if (bold) {
      componentStyle = { ...componentStyle, fontWeight: bold };
    }

    return (
      <span style={{ ...componentStyle, ...style }} {...props}>
        {children}
      </span>
    );

  }
}

export default Text;
