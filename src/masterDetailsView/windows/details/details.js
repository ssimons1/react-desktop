import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertColor } from '../../../color';
import { ColorContext, colorPropTypes, colorContextTypes } from '../../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../../style/theme/windows';

const styles = {
  details: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '1'
  }
};

@ColorContext()
@ThemeContext()

/**
 * @description MasterDetailsViewItemDetails
 */

class Details extends Component {
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
     * @property {PropTypes.string|PropTypes.bool} background - Sets the background color of a component, if bool, the color will be used as the background color.
     */
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  static childContextTypes = {
    background: PropTypes.string
  };

  static contextTypes = {
    ...colorContextTypes
  };

  getChildContext() {
    return {
      background: typeof this.props.background === 'string' ? this.props.background : this.context.color
    };
  }

  render() {
    const { children, style, background, ...props } = this.props;
    delete props.index;
    let componentStyle = { ...styles.details, ...style };

    if (background === true) {
      componentStyle.backgroundColor = convertColor(this.context.color);
    } else if (typeof background === 'string') {
      componentStyle.backgroundColor = convertColor(background);
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

export default Details;
