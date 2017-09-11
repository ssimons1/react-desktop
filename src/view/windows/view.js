import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Width, { widthPropTypes } from '../../style/width';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { backgroundContextTypes } from '../../style/background/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import { ColorContext } from '../../style/color/windows';
import { ThemeContext } from '../../style/theme/windows';

var styles = {
  display: 'flex',
  position: 'relative'
};

@Width()
@Dimension()
@Alignment()
@Margin()
@Padding()
@Background()
@Hidden()
@ColorContext()
@ThemeContext()

/**
 * @description View
 * @example
 *
 * import React, { Component } from 'react';
 * import { View, Text } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   render() {
 *     return (
 *       <View
 *         color={this.props.color}
 *         background
 *         padding="20px"
 *         horizontalAlignment="center"
 *         verticalAlignment="center"
 *         width="200px"
 *         height="100px"
 *       >
 *         <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
 *       </View>
 *     );
 *   }
 * }
 */

class View extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} color - Sets the main color of a component and it's children.
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     *
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content. Property value "left", "center", "right".
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content. Property value "top", "center", "bottom".
     */
    ...alignmentPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     */
    ...widthPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     */ 
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     */ 
    ...paddingPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     */  
    ...backgroundContextTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */ 
    ...dimensionPropTypes,
    direction: PropTypes.string,
    /**
     * @property {PropTypes.string} layout - Sets the direction of the content. Property value "horizontal", "vertical".
     */
    layout: PropTypes.string
  };

  static defaultProps = {
    layout: 'horizontal'
  };

  render() {
    let { horizontalAlignment, children, style, direction, layout, ...props } = this.props;

    let componentStyle = { ...styles, ...style };

    if (direction) {
      // direction will be deprecated on v0.3 and a warning will be shown
      layout = direction === 'column' ? 'vertical' : 'horizontal';
    }

    if (layout === 'vertical') {
      componentStyle.flexDirection = 'column';
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.alignItems = 'center'; break;
        case 'left': componentStyle.alignItems = 'flex-start'; break;
        case 'right': componentStyle.alignItems = 'flex-end'; break;
        }
      }
    } else {
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.justifyContent = 'center'; break;
        case 'left': componentStyle.justifyContent = 'flex-start'; break;
        case 'right': componentStyle.justifyContent = 'flex-end'; break;
        }
      }
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default View;
