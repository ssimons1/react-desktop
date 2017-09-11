import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @description SegmentedControlItem
 */

class Item extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} title - Sets the title of the item.
     */
    title: PropTypes.string,
    /**
     * @property {PropTypes.bool} selected - Sets whether the item is selected or not.
     */   
    selected: PropTypes.bool,
    /**
     * @property {PropTypes.func} onSelect - Callback function when selecting an item.
     */
    onSelect: PropTypes.func
  };

  render() {
    let { children, ...props } = this.props;

    delete props.title;
    delete props.selected;
    delete props.onSelect;

    return (
      <div
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Item;
