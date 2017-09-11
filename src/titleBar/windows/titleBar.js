import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background, { backgroundPropTypes } from '../../style/background/windows';
import { hiddenPropTypes } from '../../style/hidden';
import { ColorContext, colorPropTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import WindowFocus from '../../windowFocus';
import Controls from './controls/controls';
import styles from './styles/windows10';

@Background((nextProps, prevProps, background) => ({ ...nextProps, hasBackground: background }))
@WindowFocus()
@ThemeContext()
@ColorContext()

/**
 * @description TitleBar
 * @example
 *
 * import React, { Component } from 'react';
 * import { TitleBar } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = { isMaximized: true };
 *   }
 * 
 *   close = () => console.log('close');
 *   minimize = () => console.log('minimize');
 *   toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });
 * 
 *   render() {
 *     return (
 *       <TitleBar
 *         title="My Windows Application"
 *         controls
 *         isMaximized={this.state.isMaximized}
 *         theme={this.props.theme}
 *         background={this.props.color}
 *         onCloseClick={this.close}
 *         onMinimizeClick={this.minimize}
 *         onMaximizeClick={this.toggleMaximize}
 *         onRestoreDownClick={this.toggleMaximize}
 *       />
 *     );
 *   }
 * }
 */ 

class TitleBar extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
    /**
     * @property {PropTypes.string} color - Sets the main color of a component and it's children.
     */ 
    ...colorPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string} title - Sets the title of the title bar.
     */     
    title: PropTypes.string,
    /**
     * @property {PropTypes.bool} controls - Sets the visibility of the controls of the title bar.
     */
    controls: PropTypes.bool,
    /**
     * @property {PropTypes.bool} isMaximized - Sets the title bar state to maximized.
     */    
    isMaximized: PropTypes.bool,
    /**
     * @property {PropTypes.func} onCloseClick - Callback function of the close button.
     */    
    onCloseClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onMinimizeClick - Callback function of the minimize button.
     */   
    onMinimizeClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onMaximizeClick - Callback function of the maximize button.
     */
    onMaximizeClick: PropTypes.func,
    /**
     * @property {PropTypes.func} onRestoreDownClick - Callback function of the restore down button.
     */ 
    onRestoreDownClick: PropTypes.func
  };

  static childContextTypes = {
    isMaximized: PropTypes.bool
  };

  static contextTypes = {
    ...themeContextTypes
  };

  getChildContext() {
    return {
      isMaximized: this.props.isMaximized
    };
  }

  render() {
    const { children, style, controls, title, isWindowFocused, hasBackground, hidden, ...props } = this.props;

    delete props.isMaximized;
    delete props.onCloseClick;
    delete props.onMinimizeClick;
    delete props.onMaximizeClick;
    delete props.onRestoreDownClick;

    let componentStyle = { ...styles.titleBar, ...style };
    let titleStyle = styles.title;

    if (!isWindowFocused && this.context.theme !== 'dark') {
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle };
    }

    if (this.context.theme === 'dark') {
      titleStyle = { ...titleStyle, ...styles.titleDark };
    }

    componentStyle = {
      ...componentStyle,
      visibility: !hidden ? 'visible' : 'hidden',
      display: !hidden ? 'flex' : 'none'
    };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.titleBarDark };
    }

    const controlsComponent = !controls || <Controls {...this.props}/>;
    const titleComponent = !title ||
      <div style={titleStyle}>
        {this.props.title}
      </div>;

    if (hasBackground) delete componentStyle.backgroundColor;

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {titleComponent}
        {controlsComponent}
        {children}
      </div>
    );
  }
}

export default TitleBar;
