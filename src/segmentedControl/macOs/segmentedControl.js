import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Item from './item/item';
import Tabs from './tabs/tabs';
import styles from './style/10.11';
import Box from '../../box/macOs/box';

let warnOnce = false;
function applyItem() {
  return function(ComposedComponent) {
    const nextItem = Item;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function (...args) {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using SegmentedControl.Item is deprecated, import SegmentedControlItem instead.');
      }
      return new nextItem(...args);
    };
    return ComposedComponent;
  }
}

@applyItem()
@Dimension()
@Margin()
@Hidden()

/**
 * @description SegmentedControl
 * @example
 *
 * import React, { Component } from 'react';
 * import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { selected: 1 }
 *   }
 * 
 *   render() {
 *     return (
 *       <SegmentedControl box>
 *         {this.renderItems()}
 *       </SegmentedControl>
 *     );
 *   }
 * 
 *   renderItems() {
 *     return [
 *       this.renderItem(1, 'Tab 1', <Text>Content 1</Text>),
 *       this.renderItem(2, 'Tab 2', <Text>Content 2</Text>),
 *       this.renderItem(3, 'Tab 3', <Text>Content 3</Text>)
 *     ];
 *   }
 * 
 *   renderItem(key, title, content) {
 *     return (
 *       <SegmentedControlItem
 *         key={key}
 *         title={title}
 *         selected={this.state.selected === key}
 *         onSelect={() => this.setState({ selected: key })}
 *       >
 *         {content}
 *       </SegmentedControlItem>
 *     );
 *   }
 * }
 */

class SegmentedControl extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} marginTop - Sets the outer margin top of a component.
     * @property {PropTypes.string|PropTypes.number} marginLeft - Sets the outer margin left of a component.
     * @property {PropTypes.string|PropTypes.number} marginRight - Sets the outer margin right of a component.
     * @property {PropTypes.string|PropTypes.number} marginBottom - Sets the outer margin bottom of a component.
     */
    ...marginPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.bool} box - Sets whether the item is in a box or not.
     */
    box: PropTypes.bool
  };

  select(item) {
    this.refs.tabs.select(item);
  }

  unselect(item) {
    this.refs.tabs.unselect(item);
  }

  render() {
    let { children, box, ...props } = this.props;

    let content;
    if (box) {
      content = (
        <Box style={{ marginTop: '-11px', zIndex: 0 }}>
          {this.renderItem()}
        </Box>
      );
    } else {
      content = (
        <div>
          {this.renderItem()}
        </div>
      );
    }

    return (
      <div
        style={styles.sergmentedControl}
        {...props}
      >
        <Tabs style={{ position: 'relative', zIndex: 1 }}>{children}</Tabs>
        {content}
      </div>
    );
  }

  renderItem() {
    let child = null;
    let children;
    // todo: use Children.map
    if (!this.props.children) {
      return null;
    } else if (Object.prototype.toString.call(this.props.children) !== '[object Array]') {
      children = [this.props.children];
    } else {
      children = [...this.props.children];
    }
    for (let i = 0, len = children.length; i < len; ++i) {
      if (children[i].props.selected) child = children[i];
    }
    return child;
  }
}

export default SegmentedControl;
