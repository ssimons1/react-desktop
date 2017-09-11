import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Padding, { paddingPropTypes } from '../../../style/padding';
import Margin, { marginPropTypes } from '../../../style/margin';
import Background, { backgroundPropTypes } from '../../../style/background/windows';
import Alignment, { alignmentPropTypes } from '../../../style/alignment';
import Title from './title/title';
import Content from './content/content';
import styles from '../style/windows10';
import { StyleRoot } from 'radium';
import { ColorContext, colorPropTypes } from '../../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../../style/theme/windows';

@Padding()
@Margin()
@Background()
@Alignment()
@ColorContext()
@ThemeContext()

/**
 * @description NavPaneItem
 */

class Item extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string|PropTypes.bool} color - Sets the main color of a component.
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
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     */ 
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string} horizontalAlignment - Sets the horizontal alignment of the component's content. Property value "left", "center", "right".
     * @property {PropTypes.string} verticalAlignment - Sets the vertical alignment of the component's content. Property value "top", "center", "bottom".
     */
    ...alignmentPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.element|PropTypes.array} title - Sets the title of the element.
     */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    /**
     * @property {PropTypes.string|PropTypes.element|PropTypes.array} title - Sets the icon element of the item.
     */  
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    /**
     * @property {PropTypes.bool} push - Display push animation when pressing the button.
     */
    push: PropTypes.bool,
    /**
     * @property {PropTypes.func} onSelect - Callback function when an item is selected.
     */
    onSelect: PropTypes.func,
    /**
     * @property {PropTypes.bool} selected - Sets whether the item is selected or not.
     */
    selected: PropTypes.bool,
    paneTheme: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      prevTitle: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      this.setState({ prevTitle: this.props.title });
    }
  }

  render() {
    const { children, title, paneTheme, ...props } = this.props;

    delete props.icon;
    delete props.push;
    delete props.onSelect;
    delete props.selected;

    return (
      <div
        style={styles.navPaneItem}
      >
        <div style={styles.contentWrapper}>
          <StyleRoot>
            <Title
              key={title}
              title={title}
              theme={paneTheme}
              prevTitle={this.state.prevTitle}
            />
          </StyleRoot>
          <Content
            content={children}
            {...props}
          />
        </div>
      </div>
    );
  }
}

export default Item;
