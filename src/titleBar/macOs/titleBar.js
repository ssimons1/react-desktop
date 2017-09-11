import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';
import Dimension, { dimensionPropTypes } from '../../style/dimension';

@Dimension({ width: '100%' })
@WindowFocus()

/**
 * @description TitleBar
 * @example
 *
 * import React, { Component } from 'react';
 * import { View, TitleBar } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { isFullscreen: false };
 *   }
 * 
 *   render() {
 *     return (
 *       <TitleBar
 *         title="untitled text 5"
 *         controls
 *         isFullscreen={this.state.isFullscreen}
 *         onCloseClick={() => console.log('Close window')}
 *         onMinimizeClick={() => console.log('Minimize window')}
 *         onMaximizeClick={() => console.log('Mazimize window')}
 *         onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
 *       />
 *     );
 *   }
 * }
 */

class TitleBar extends Component {
  static propTypes = { 
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string} title - Sets the title of the title bar.
     */       
    title: PropTypes.string,
    /**
     * @property {PropTypes.bool} inset - Sets the controls of the title bar state to be inset.
     */    
    inset: PropTypes.bool,
    /**
     * @property {PropTypes.bool} controls - Sets the visibility of the controls of the title bar.
     */
    controls: PropTypes.bool,
    /**
     * @property {PropTypes.bool} transparent - Makes the title bar background transparent.
     */   
    transparent: PropTypes.bool,
    /**
     * @property {PropTypes.bool} isFullscreen - Sets the title bar state to fullscreen.
     */    
    isFullscreen: PropTypes.bool,
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
     * @property {PropTypes.func} onResizeClick - Callback function of the resize button.
     */  
    onResizeClick: PropTypes.func
  };

  static childContextTypes = {
    titlebarChild: PropTypes.bool
  };

  getChildContext() {
    return {
      titlebarChild: true
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  componentDidUpdate() {
    this.resize();
  }

  resize = () => {
    if (this.refs.title) {
      const barRect = this.refs.element.getBoundingClientRect();
      this.refs.title.style.overflow = 'visible';
      this.refs.title.style.paddingRight = 0;
      this.refs.title.style.flexGrow = 0;
      const titleRect = this.refs.title.getBoundingClientRect();
      this.refs.title.style.overflow = 'hidden';
      this.refs.title.style.flexGrow = 1;

      const barWidth = barRect.width - 6;
      const contentWidth = titleRect.width + (this.props.controls ? 60 : 0);

      let padding = barWidth - contentWidth;
      if (padding > 60) padding = 60;

      this.refs.title.style.paddingRight = (padding) + 'px';
    }
  };

  render() {
    let {
      children,
      inset,
      controls,
      title,
      transparent,
      isWindowFocused,
      style,
      ...props
    } = this.props;

    delete props.isFullscreen;
    delete props.onCloseClick;
    delete props.onMinimizeClick;
    delete props.onMaximizeClick;
    delete props.onResizeClick;

    let componentStyle = { ...styles.titleBar };

    let titleStyle = styles.title;

    if (inset) {
      componentStyle = { ...componentStyle, ...styles.titleBarInset };
    }

    if (!isWindowFocused) {
      componentStyle = { ...componentStyle, ...styles.unfocusedTitleBar };
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle }
    }

    controls = !controls || <Controls ref="controls" inset={inset} {...this.props}/>;
    title = !title || (
        <div ref="title" style={titleStyle}>
          {title}
        </div>
      );

    if (transparent) {
      delete componentStyle.backgroundImage;
      delete componentStyle.borderBottomWidth;
      delete componentStyle.borderBottomStyle;
      delete componentStyle.borderBottomColor;
      delete componentStyle.borderTopWidth;
      delete componentStyle.borderTopStyle;
      delete componentStyle.borderTopColor;
      delete componentStyle.borderTopLeftRadius;
      delete componentStyle.borderTopRightRadius;
    }

    return (
      <div
        ref="element"
        style={{ ...componentStyle, ...style }}
        {...props}
      >
        {controls}
        {title}
        {children}
      </div>
    );
  }
}

export default TitleBar;
