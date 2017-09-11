import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../../style/hidden';
import Margin, { marginPropTypes } from '../../../style/margin';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Dimension()
@Hidden()
@Margin({ marginLeft: '10px', marginRight: '10px', marginTop: '4px', marginBottom: '4px' })
@Padding()

/**
 * @description Separator
 */

class Separator extends Component {
  static propTypes = {
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
     * @property {PropTypes.string} color - Sets the color of the separator.
     */
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#e5e5e5'
  };

  render() {
    const { style, ...props } = this.props;

    return (
      <hr style={{ ...styles.separator, ...style }} {...props}/>
    );
  }
}

export default Separator;
