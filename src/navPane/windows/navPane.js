import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Pane from './pane/pane';
import Item from './item/item';
import styles from './style/windows10';
import { ColorContext, colorPropTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';

let warnOnce = false;
function applyChildenClasses() {
  return function(ComposedComponent) {
    const nextItem = Item;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function (...args) {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using NavPane.Item is deprecated, import NavPaneItem instead.');
      }
      return new nextItem(...args);
    };
    return ComposedComponent;
  }
}

@applyChildenClasses()
@ColorContext()
@ThemeContext()

/**
 * @description NavPane
 * @example
 *
 * import React, { Component } from 'react';
 * import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29',
 *     theme: 'light'
 *   };
 * 
 *   constructor() {
 *     super();
 *     this.state = {
 *       selected: 'Item 1'
 *     }
 *   }
 * 
 *   render() {
 *     return (
 *       <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
 *         {this.renderItem('Item 1', 'Content 1')}
 *         {this.renderItem('Item 2', 'Content 2')}
 *         {this.renderItem('Item 3', 'Content 3')}
 *       </NavPane>
 *     );
 *   }
 * 
 *   renderItem(title, content) {
 *     return (
 *       <NavPaneItem
 *         title={title}
 *         icon={this.renderIcon(title)}
 *         theme="light"
 *         background="#ffffff"
 *         selected={this.state.selected === title}
 *         onSelect={() => this.setState({ selected: title })}
 *         padding="10px 20px"
 *         push
 *       >
 *         <Text>{content}</Text>
 *       </NavPaneItem>
 *     );
 *   }
 * 
 *   renderIcon(name) {
 *     const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
 *     switch(name) {
 *     case 'Item 1':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="14.9px" viewBox="0 0 16 14.9">
 *           <polygon fill={fill} points="16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 "/>
 *         </svg>
 *       );
 *     case 'Item 2':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="13.5px" viewBox="0 0 16 13.5">
 *           <path
 *             fill={fill}
 *             d="M16,4.2C16,1.9,14.1,0,11.7,0c-1.4,0-2.6,0.6-3.4,1.6c0,0,0,0,0,0C8.3,1.7,8.1,1.8,8,1.8
 *             c-0.2,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0C6.8,0.6,5.6,0,4.3,0C1.9,0,0,1.9,0,4.2c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.3
 *             C0,4.8,0.1,5,0.1,5.2c0.3,1.4,1.4,4.1,5.1,6.5c2.1,1.4,2.6,1.8,2.8,1.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.7-0.4,2.8-1.8
 *             c3.5-2.3,4.6-4.8,5-6.3C15.9,5.1,16,4.8,16,4.5C16,4.3,16,4.2,16,4.2L16,4.2C16,4.2,16,4.2,16,4.2z"
 *           />
 *         </svg>
 *       );
 *     case 'Item 3':
 *       return (
 *         <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 16 15.6">
 *           <path
 *             fill={fill}
 *             d="M14.9,3.2c0.7-0.9,1-1.7,1.1-2.4c0-0.2,0-0.4-0.1-0.5c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1
 *             C15.6,0,15.4,0,15.2,0c-0.7,0-1.6,0.4-2.4,1c-0.7,0.5-1.4,1.2-2.4,2.3C10.2,3.5,10,3.6,9.8,3.8L8.3,3.4L7.9,3.3C8,3.2,8.1,3.1,8.1,3
 *             c0-0.1,0-0.2-0.1-0.3L7.6,2.3C7.5,2.3,7.4,2.2,7.3,2.2c-0.1,0-0.2,0-0.3,0.1L6.5,2.8L6.2,2.8c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3L5.8,1.9C5.7,1.8,5.6,1.8,5.5,1.8c-0.1,0-0.2,0-0.3,0.1L4.7,2.3L2.8,1.8c0,0-0.1,0-0.1,0
 *             c-0.1,0-0.3,0.1-0.4,0.1L1.6,2.6C1.5,2.6,1.5,2.7,1.5,2.8c0,0.1,0.1,0.3,0.2,0.3l4.1,2.2c0,0,0.1,0.1,0.1,0.1L7,6.6
 *             C6,7.7,5,8.8,4.2,9.7C4.2,9.8,4.1,9.9,4,10L0.9,9.7c0,0,0,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2l-0.3,0.3C0,10.3,0,10.4,0,10.5
 *             c0,0.1,0.1,0.3,0.2,0.3l2.2,1c0,0,0.1,0,0.1,0.1l0.2,0.2c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4C2.9,13,3,13.1,3.2,13.1
 *             c0.1,0,0.3,0,0.4-0.1l0.2,0.2c0,0,0,0.1,0.1,0.1l1.1,2.2c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.2,0,0.3-0.1l0.3-0.3C6,15.1,6,14.9,6,14.8
 *             c0,0-0.3-3.1-0.3-3.1c0.1-0.1,0.2-0.1,0.3-0.2c1-0.7,2.1-1.7,3.2-2.7l1.2,1.1c0,0,0.1,0.1,0.1,0.1l2.3,4c0.1,0.1,0.2,0.2,0.3,0.2
 *             c0.1,0,0.2,0,0.3-0.1l0.7-0.7c0.1-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1l-0.5-1.8L13.6,11l0.5-0.4c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-0.1-0.3l0.5-0.5c0.1-0.1,0.1-0.2,0.1-0.3
 *             c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L12.1,6c0.2-0.2,0.4-0.4,0.6-0.5
 *             C13.7,4.5,14.4,3.8,14.9,3.2z"
 *           />
 *         </svg>
 *       );
 *     }
 *   }
 * }
 */

class NavPane extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} color - Sets the main color of a component.
     */
    ...colorPropTypes,
    /**
     * @property {PropTypes.string} theme - Sets the UI theme that is used by this component and its children elements. Property value "light", "dark".
     */
    ...themePropTypes,
    /**
     * @property {PropTypes.bool} canPaneToggle - Sets whether the pane can be compacted. Default value "true".
     */
    canPaneToggle: PropTypes.bool,
    /**
     * @property {PropTypes.func} onPaneToggle - Callback function when the pane is expanded or compacted.
     */
    onPaneToggle: PropTypes.func,
    /**
     * @property {PropTypes.string} defaultIsPaneExpanded - Sets whether the pane is expanded by default. Default value "true".
     */
    defaultIsPaneExpanded: PropTypes.bool,
    /**
     * @property {PropTypes.string|PropTypes.number} paneCompactedLength - Sets the length of the pane when compacted. Default value "48px".
     */
    paneCompactedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * @property {PropTypes.string|PropTypes.number} paneExpandedLength - Sets the length of the pane when expanded. Default value "200px".
     */
    paneExpandedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static contextTypes = {
    ...themeContextTypes
  };

  render() {
    return (
      <div style={styles.navPane}>
        <Pane
          items={this.props.children}
          canPaneToggle={this.props.canPaneToggle}
          onPaneToggle={this.props.onPaneToggle}
          defaultIsPaneExpanded={this.props.defaultIsPaneExpanded}
          paneCompactedLength={this.props.paneCompactedLength}
          paneExpandedLength={this.props.paneExpandedLength}
        />
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    let content = null;
    Children.map(this.props.children, child => {
      if (child.props.selected) content = child;
    });
    return content ? cloneElement(content, { ...content.props, paneTheme: this.context.theme }) : null;
  }
}

export default NavPane;
