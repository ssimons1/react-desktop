import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colorPropTypes, colorContextTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../style/theme/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Radium from 'radium';
import { darkenColor } from '../../color';
import styles from './styles/windows10';

@Hidden()
@ThemeContext()
@Radium

/**
 * @description Button
 * @example
 *
 * import React, { Component } from 'react';
 * import { Button } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29'
 *   };
 * 
 *   render() {
 *     return (
 *       <Button push color={this.props.color} onClick={() => console.log('Clicked!')}>
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
     * @property {PropTypes.string|PropTypes.bool} color - Sets whether the button is colored (bool) or sets the color of the button (string).
     */
    ...colorPropTypes,
    /**
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
    /**
     * @property {PropTypes.string} type - Sets the type of the button. Property value "button" "submit". Default value "button".
     */
    type: PropTypes.string,
    /**
     * @property {PropTypes.bool} push - Display push animation when pressing the button.
     */
    push: PropTypes.bool,
    /**
     * @property {PropTypes.func} onClick - Callback function when the button is pressed.
     */
    onClick: PropTypes.func
  };

  static contextTypes = {
    ...colorContextTypes
  };

  render() {
    let { style, type, children, color, push, onClick, ...props } = this.props;

    let componentStyle = { ...styles.button, ...style };

    if (color) {
      color = color === true ? this.context.color : color;
      styles.colorButton = {
        ...styles.colorButton,
        borderColor: color,
        backgroundColor: color,
        ':hover': {
          ...styles.colorButton[':hover'],
          borderColor: darkenColor(color, .35)
        },

        ':active': {
          ...styles.colorButton[':active'],
          borderColor: darkenColor(color, .35),
          backgroundColor: darkenColor(color, .35)
        }
      };
      componentStyle = { ...componentStyle, ...styles.colorButton };
    }

    if (push) {
      componentStyle[':active'] = { ...componentStyle[':active'], ...styles.pushTransform };
    }

    return (
      <button
        ref="element"
        type={type || 'button'}
        onClick={onClick}
        style={componentStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
