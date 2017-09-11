import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import TextAlign, { textAlignPropTypes } from '../../style/textAlign';
import Hidden, { hiddenPropTypes } from '../../style/hidden';

const componentStyle = {
  display: 'inline-block',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  cursor: 'default',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
  fontSize: '11px',
  textDecoration: 'none'
};

@Margin()
@Padding()
@FontSize()
@Dimension()
@TextAlign()
@Hidden()

/**
 * @description Link
 * @example
 *
 * import React, { Component } from 'react';
 * import { View, Link } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <View background="#efefef" padding="20px" width="300px" direction="row">
 *         <Link color="red">
 *           This is a link
 *         </Link>
 *         <Link marginLeft="auto">
 *           This is another link
 *         </Link>
 *       </View>
 *     );
 *   }
 * }
 */

class Link extends Component {
  static propTypes = {
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
     * @property {PropTypes.string|PropTypes.number} size - Sets the font size of a component.
     */
    ...fontSizePropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string} textAlign - Sets the text alignment of the component's content. Property value "left", "center", "right".
     */
    ...textAlignPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string} color - Sets the color of the text.
     */
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#009df0'
  };

  render() {
    const { color, children, style, ...props } = this.props;

    return (
      <a style={{ ...componentStyle, color, ...style }} {...props}>
        {children}
      </a>
    );
  }
}

export default Link;
