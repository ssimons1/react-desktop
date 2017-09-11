import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../../titleBar/macOs/titleBar';
import View from '../../view/macOs/view';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';
import Padding, { paddingPropTypes, removePaddingProps } from '../../style/padding';
import Background, { backgroundPropTypes, removeBackgroundProps } from '../../style/background/macOs';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes }  from '../../style/dimension';

@WindowFocus()
@Alignment()
@Hidden()
@Dimension({ width: '100vw', height: '100vh' })

/**
 * @description Window
 * @example
 *
 * import React, { Component } from 'react';
 * import { Window, TitleBar, Text } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   render() {
 *     return (
 *       <Window
 *         chrome
 *         height="300px"
 *         padding="10px"
 *       >
 *         <TitleBar title="untitled text 5" controls/>
 *         <Text>Hello World</Text>
 *       </Window>
 *     );
 *   }
 * }
 */

class Window extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingLeft - Sets the padding left inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingRight - Sets the padding right inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingBottom - Sets the padding bottom inside a component.
     */
    ...paddingPropTypes,
    /**
     * @property {PropTypes.string} background - Sets the background color of a component.
     */
    ...backgroundPropTypes,
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
    let { style, chrome, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome
      };

      if (!isWindowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused }
      }
    }

    const [titleBar, ...children] = this.filterChildren();

    let contentStyle = styles.content;
    if (chrome) {
      contentStyle = {
        ...contentStyle,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px'
      };
    }

    let content = Background(
      Padding(
        <View style={contentStyle}>{children}</View>,
        props
      ),
      props
    );
    props = removePaddingProps(props);
    props = removeBackgroundProps(props);

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
