import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Background, { backgroundPropTypes } from '../../style/background/windows';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import { colorContextTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import styles from './styles/windows10';

@Margin()
@Padding()
@Alignment()
@Hidden()
@Background()
@Dimension()
@ThemeContext()

/**
 * @description Text
 * @example
 *
 * import React, { Component } from 'react';
 * import { Label } from 'react-desktop/windows';
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
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     */ 
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
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
     * @property {PropTypes.string|PropTypes.bool} background - Sets whether the background is colored (bool) or sets the color of the background (string).
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.bool} color - Sets whether the text is colored (bool) or sets the color of the text (string).
     */
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.text };

    color = color === true ? this.context.color : color ? color : '#000000';
    if (color) componentStyle = { ...componentStyle, color: color };
    else if (this.context.theme === 'dark') componentStyle = { ...componentStyle, color: '#ffffff' };

    if (props.horizontalAlignment) {
      componentStyle.textAlign = props.horizontalAlignment;
    }

    componentStyle = { ...componentStyle, ...style };

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Text;
