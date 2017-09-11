import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../../titleBar/windows/titleBar';
import View from '../../view/windows/view';
import styles from './styles/windows10';
import WindowFocus from '../../windowFocus';
import Padding, { paddingPropTypes, removePaddingProps } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes }  from '../../style/dimension';
import { ColorContext, colorPropTypes, colorContextTypes }  from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes }  from '../../style/theme/windows';

@WindowFocus()
@Alignment()
@Hidden()
@Dimension({ width: '100vw', height: '100vh' })
@ColorContext()
@ThemeContext()

/**
 * @description Window
 * @example
 *
 * import React, { Component } from 'react';
 * import { Window, TitleBar, Text } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   render() {
 *     return (
 *       <Window
 *         color={this.props.color}
 *         theme={this.props.theme}
 *         chrome
 *         height="300px"
 *         padding="12px"
 *       >
 *         <TitleBar title="My Windows Application" controls/>
 *         <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
 *       </Window>
 *     );
 *   }
 * }
 */

class Window extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     * 
     * @property {PropTypes.string|PropTypes.bool} color - Sets the main color of a component and it's children.
     */
    ...colorPropTypes,
    /**
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
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
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */   
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.bool} chrome - Sets the chrome of the window.
     */
    chrome: PropTypes.bool
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, (element) => {
      if (element.type === TitleBar) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, background, chrome, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome,
        borderColor: this.context.color
      };

      if (!isWindowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused }
      }
    }

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.windowDark };
    }

    if (background) {
      componentStyle = { ...componentStyle, backgroundColor: background };
    }

    const [titleBar, ...children] = this.filterChildren();

    let content = Padding(
      <View ref="content" style={styles.content}>{children}</View>,
      this.props
    );

    props = removePaddingProps(props);
    return (
      <div
        style={componentStyle}
        {...props}
      >
        {titleBar}
        {content}
      </div>
    );
  }
}

export default Window;
