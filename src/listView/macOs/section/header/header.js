import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style/10.11';
import Text from '../../../../text/macOs/text';
import Margin, { marginPropTypes, removeMarginProps } from '../../../../style/margin';
import Padding, { paddingPropTypes, removePaddingProps } from '../../../../style/padding';
import { fontSizePropTypes } from '../../../../style/fontSize';
import mapStyles from '../../../../utils/mapStyles';

/**
 * @description ListViewSectionHeader
 */

class Header extends Component {
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
     * @property {PropTypes.string} color - Sets the color of the text.
     */
    color: PropTypes.string,
    /**
     * @property {PropTypes.bool|PropTypes.number|PropTypes.string} bold - Sets the bold value of a component.
     */
    bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    color: '#5a5b5c',
    bold: true,
    size: '10'
  };

  static mapStyles = {
    text: ['color', 'fontSize', 'fontWeight', 'lineHeight', 'fontFamily']
  };

  render() {
    let { color, bold, size, children, style, ...props } = this.props;

    props = removePaddingProps(removeMarginProps(props));

    let [headerStyle, textStyle] = mapStyles(style, Header.mapStyles);

    return (
      <header {...props} style={headerStyle}>
        {Padding(Margin(<h2 style={styles.title}>
          <Text color={color} size={size} bold={bold} style={textStyle}>
            {children}
          </Text>
        </h2>, this.props), this.props)}
      </header>
    );
  }
}

export default Header;
