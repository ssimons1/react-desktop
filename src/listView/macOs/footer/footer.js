import React, { Component } from 'react';
import Background, { backgroundPropTypes } from '../../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Background({ background: '#f0f0f0' })
@Dimension()
@Padding({ paddingLeft: '10px', paddingRight: '10px', paddingTop: '2px', paddingBottom: '2px' })

/**
 * @description ListViewFooter
 */

class Footer extends Component {
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
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingLeft - Sets the padding left inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingRight - Sets the padding right inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingBottom - Sets the padding bottom inside a component.
     */
    ...paddingPropTypes
  };

  render() {
    const { children, style, ...props } = this.props;

    return (
      <footer style={{ ...styles.header, ...style }} {...props}>
        {children}
      </footer>
    );
  }
}

export default Footer;
