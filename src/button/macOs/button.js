import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowFocus from '../../windowFocus';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Padding, { paddingPropTypes, removeDuplicatePaddingProps } from '../../style/padding';
import Margin, { marginPropTypes } from '../../style/margin';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Padding()
@Margin()
@Hidden()
@FontSize()
@Radium

/**
 * @description Button
 * @example 
 *
 * import React, { Component } from 'react';
 * import { Button } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <Button color="blue" onClick={() => console.log('Clicked!')}>
 *         Press me!
 *       </Button>
 *     );
 *   }
 * }
 */
class Button extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} size - Sets the font size of a component.
     */
    ...fontSizePropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingLeft - Sets the padding left inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingRight - Sets the padding right inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingBottom - Sets the padding bottom inside a component.
     */
    ...paddingPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} marginTop - Sets the outer margin top of a component.
     * @property {PropTypes.string|PropTypes.number} marginLeft - Sets the outer margin left of a component.
     * @property {PropTypes.string|PropTypes.number} marginRight - Sets the outer margin right of a component.
     * @property {PropTypes.string|PropTypes.number} marginBottom - Sets the outer margin bottom of a component.
     */
    ...marginPropTypes,
    /**
     * @property {PropTypes.string} type - Sets the type of the button. Property value "button" "submit". Default value "button".
     */
    type: PropTypes.string,
    /**
     * @property {PropTypes.string|PropTypes.bool} color - Sets the color of the button. Property value null "blue".
     */
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * @property {PropTypes.func} onClick - Callback function when the button is pressed.
     */
    onClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onEnter - Callback function when the the enter key is pressed.
     */
    onEnter: PropTypes.func,
    disabled: PropTypes.bool
  };

  componentDidMount() {
    if (window && this.props.onEnter) {
      window.addEventListener('keyup', this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (window && this.props.onEnter) {
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      if (this.props.onEnter && !this.props.disabled) this.props.onEnter(e);
    }
  };

  render() {
    let { style, type, children, color, onClick, isWindowFocused, disabled, ...props } = this.props;
    delete props.onEnter;

    let componentStyle = { ...styles.button };
    if (!disabled && color === 'blue' && isWindowFocused) {
      componentStyle = { ...componentStyle, ...styles.blue };
    } else if (disabled) {
      componentStyle = { ...componentStyle, opacity: '.5' };
    }

    componentStyle = { ...componentStyle, ...style };

    return (
      <button
        ref="element"
        type={type || 'button'}
        onClick={onClick}
        style={removeDuplicatePaddingProps(componentStyle, this.props)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
