import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hiddenPropTypes } from '../../style/hidden';
import { ColorContext, colorPropTypes, colorContextTypes } from '../../style/color/windows';
import { startAnimation, stopAnimation } from './progressCircleAnimation';
import styles from './styles/windows10';

@ColorContext()

/**
 * @description Progress Circle
 * @example
 *
 * import React, { Component } from 'react';
 * import { ProgressCircle } from 'react-desktop/windows';
 * 
 * export default class extends Component {
 *   static defaultProps = {
 *     color: '#cc7f29'
 *   };
 * 
 *   render() {
 *     return (
 *       <ProgressCircle
 *         color={this.props.color}
 *         size={100}
 *       />
 *     );
 *   }
 * }
 */

class ProgressCircle extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string} color - Sets the color of the progress circle.
     */
    ...colorPropTypes,
    absolute: PropTypes.bool,
    /**
     * @property {PropTypes.number} size - Sets the size of the progress circle.
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static contextTypes = {
    ...colorContextTypes
  };

  componentDidMount() {
    this.animation = startAnimation(
      this.refs[0],
      this.refs[1],
      this.refs[2],
      this.refs[3],
      this.refs[4],
      this.refs[5]
    );
  }

  componentWillUnmount() {
    stopAnimation(this.animation);
  }

  render() {
    const { size, style, absolute, hidden, ...props } = this.props;

    let containerStyle = { ...styles.container };
    let componentStyle = {
      ...styles.progress,
      ...style,
      visibility: !hidden ? 'visible' : 'hidden',
      display: !hidden ? 'block' : 'none'
    };

    if (absolute) {
      componentStyle = { ...componentStyle, ...styles.absolute };
    }

    let componentColor = this.context.color;
    if (size) {
      componentStyle = {
        ...componentStyle,
        width: size + 'px',
        height: size + 'px'
      };
      containerStyle = {
        ...containerStyle,
        height: size + 'px'
      };
    }

    const svg = (
      <svg
        id="field"
        ref="element"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        style={componentStyle}
        {...props}
      >
        <circle ref="0" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="1" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="2" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="3" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="4" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="5" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
      </svg>
    );

    let content = svg;
    if (absolute) {
      content = (
        <div style={containerStyle}>
          {svg}
        </div>
      );
    }

    return content;
  }
}

export default ProgressCircle;
