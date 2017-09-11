import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../../text/macOs/text';

const styles = {
  container: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '64px'
  },
  iconContainer: {
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '1px'
  }
};

/**
 * @description ToolbarNavItem
 */

class Item extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} title - Sets the title of the item.
     */
    title: PropTypes.string,
    /**
     * @property {PropTypes.element|PropTypes.array} icon - Sets the icon element of the item.
     */   
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    /**
     * @property {PropTypes.bool} selected - Sets whether the item is selected or not.
     */    
    selected: PropTypes.bool,
    /**
     * @property {PropTypes.func} onClick - Callback function when the item is pressed.
     */        
    onClick: PropTypes.func
  };

  render() {
    const { title, icon, style, selected, ...props } = this.props;

    return (
      <div className={'_reactDesktop-Toolbar-Nav-Item-SVG' + (selected ? ' _selected' : '')}>
        <a
          style={{ ...styles.container, ...style }}
          {...props}
        >
          <div style={styles.iconContainer}>
            {icon}
          </div>
          <Text size="11" color="#1e1c1e">{title}</Text>
        </a>
      </div>
    );
  }
}

export default Item;
