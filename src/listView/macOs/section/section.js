import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import styles from './style/10.11';

/**
 * @description ListViewSection
 */

class Section extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string|PropTypes.element|PropTypes.array} header - Sets the header or header element of the component.
     */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
  };

  render() {
    let { children, header, ...props } = this.props;

    if (typeof header === 'string') {
      header = <Header>{header}</Header>;
    }

    return (
      <section {...props}>
        {header}
        <ul style={styles.list}>
          {children}
        </ul>
      </section>
    );
  }
}

export default Section;
