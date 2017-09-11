import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../text/windows/text';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import ValueRef from '../../ValueRef';
import Background, { backgroundPropTypes, removeBackgroundProps } from '../../style/background/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import { ColorContext, colorContextTypes } from '../../style/color/windows';
import styles from './styles/windows10';
import PlaceholderStyle from '../../placeholderStyle';
import Radium from 'radium';

@ValueRef()
@Hidden()
@Dimension()
@Margin()
@ColorContext()
@ThemeContext()
@Radium

/**
 * @description TextInput
 * @example
 *
 * import React, { Component } from 'react';
 * import { TextInput } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   handleChange = e => console.log(e.target.value);
 * 
 *   render() {
 *     return (
 *       <TextInput
 *         ref="input"
 *         theme={this.props.theme}
 *         color={this.props.color}
 *         background
 *         label="My Input"
 *         placeholder="My Input"
 *         onChange={this.handleChange}
 *       />
 *     );
 *   }
 * }
 */

class TextInput extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     */ 
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string} label - Adds a label to the input.
     */    
    label: PropTypes.string,
    /**
     * @property {PropTypes.string|PropTypes.bool} labelColor - Sets whether the label text is colored (bool) or sets the color of the label text (string).
     */    
    labelColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * @property {PropTypes.object} labelStyle - Custom styles for the label.
     */        
    labelStyle: PropTypes.object,
    /**
     * @property {PropTypes.bool} password - Sets the input type to password.
     */    
    password: PropTypes.bool
  };

  static contextTypes = {
    ...themeContextTypes,
    ...colorContextTypes
  };

  get placeholderStyle() {
    return this.context.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  render() {
    let { label, labelColor, labelStyle, style, password, ...props } = this.props;
    let componentStyle = { ...styles.textBox, ...style };

    if (this.context.theme === 'dark') {
      labelStyle = { ...styles.labalDarkTheme, ...labelStyle };
      componentStyle = { ...componentStyle, ...styles.textBoxDarkTheme };
    }

    labelColor = labelColor === true ? this.context.color : labelColor ? labelColor : this.context.theme === 'dark' ? '#FFFFFF' : null;
    if (labelColor) labelStyle = { color: labelColor, ...labelStyle };

    componentStyle[':focus'] = { ...componentStyle[':focus'], borderColor: this.context.color };

    props = removeBackgroundProps(props);

    const input = (
      <PlaceholderStyle placeholderStyle={this.placeholderStyle}>
        {Background(
          <input
            type={`${password ? 'password' : 'text'}`}
            style={componentStyle}
            {...props}
          />,
          this.props
        )}
      </PlaceholderStyle>
    );

    if (label) {
      return (
        <div>
          <Text style={{ marginBottom: '5px', ...labelStyle }} color={this.context.theme === 'dark' ? '#FFFFFF' : null}>
            {label}
          </Text>
          {input}
        </div>
      );
    }
    return input;
  }
}

export default TextInput;
