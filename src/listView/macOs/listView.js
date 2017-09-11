import React, { Component, Children } from 'react';
import styles from './style/10.11';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Header from './header/header';
import Footer from './footer/footer';
import Row from './row/row';

@Background()
@Dimension()
@Hidden()
@Margin()
@Padding()

/**
 * @description ListView
 * @example
 *
 * import React, { Component } from 'react';
 * import {
 *   ListView,
 *   ListViewHeader,
 *   ListViewFooter,
 *   ListViewSection,
 *   ListViewSectionHeader,
 *   ListViewRow,
 *   ListViewSeparator,
 *   Text
 * } from 'react-desktop/macOs';
 * 
 * export default class extends Component {
 *   constructor() {
 *     super();
 *     this.state = { selected: null };
 *   }
 * 
 *   render() {
 *     return (
 *       <ListView background="#f1f2f4" width="240" height="200">
 *         <ListViewHeader>
 *           <Text size="11" color="#696969">Order by name</Text>
 *         </ListViewHeader>
 *         <ListViewSection header={this.renderSectionHeader('My Section')}>
 *           {this.renderItem('Item 1', 'This is the first item.')}
 *           {this.renderItem('Item 2', 'This is the second item.')}
 *           {this.renderItem('Item 3', 'This is the third item.')}
 *         </ListViewSection>
 *         <ListViewSeparator/>
 *         <ListViewSection header={this.renderSectionHeader('My Section 2')}>
 *           {this.renderItem('Item 4', 'This is the fourth item.')}
 *           {this.renderItem('Item 5', 'This is the fifth item.')}
 *           {this.renderItem('Item 6', 'This is the sixth item.')}
 *         </ListViewSection>
 *         <ListViewFooter>
 *           <Text size="11" color="#696969">Status</Text>
 *         </ListViewFooter>
 *       </ListView>
 *     );
 *   }
 * 
 *   renderSectionHeader(title) {
 *     return (
 *       <ListViewSectionHeader>
 *         {title}
 *       </ListViewSectionHeader>
 *     );
 *   }
 * 
 *   renderItem(title, info) {
 *     return (
 *       <ListViewRow
 *         onClick={() => this.setState({ selected: title })}
 *         background={this.state.selected === title ? '#d8dadc' : null}
 *       >
 *         <svg x="0px" y="0px" width="18" height="12" viewBox="0 0 18 12" style={{ marginRight: '6px' }}>
 *           <path fill="#727476" d="M13.2,0H4.9L0,6.8v3.7C0,11.3,0.7,12,1.5,12h15
 *     c0.8,0,1.5-0.7,1.5-1.5V6.8L13.2,0z M13.8,6.8L12.3,9L5.9,9L4.2,6.8l-3.1,0l4.2-6h7.4l4.2,6L13.8,6.8z"/>
 *           <polygon fill="#C9CBCD" points="13.8,6.8 12.3,9 5.9,9 4.2,6.8 1.2,6.7 5.4,0.8 12.8,0.8
 *     17,6.7 "/>
 *         </svg>
 *         <Text color="#414141" size="13">{info}</Text>
 *       </ListViewRow>
 *     );
 *   }
 * }
 */

class ListView extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.string} background - Sets the background color of a component.
     */
    ...backgroundPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} width - Sets the width of a component.
     * @property {PropTypes.string|PropTypes.number} height - Sets the height of a component.
     */
    ...dimensionPropTypes,
    /**
     * @property {PropTypes.bool} hidden - Sets the visibility of a component.
     */
    ...hiddenPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} margin - Sets the outer margin of a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} marginTop - Sets the outer margin top of a component.
     * @property {PropTypes.string|PropTypes.number} marginLeft - Sets the outer margin left of a component.
     * @property {PropTypes.string|PropTypes.number} marginRight - Sets the outer margin right of a component.
     * @property {PropTypes.string|PropTypes.number} marginBottom - Sets the outer margin bottom of a component.
     */
    ...marginPropTypes,
    /**
     * @property {PropTypes.string|PropTypes.number} padding - Sets the padding inside a component. E.G. "30px 20px".
     * @property {PropTypes.string|PropTypes.number} paddingTop - Sets the padding top inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingLeft - Sets the padding left inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingRight - Sets the padding right inside a component.
     * @property {PropTypes.string|PropTypes.number} paddingBottom - Sets the padding bottom inside a component.
     */
    ...paddingPropTypes
  };

  mapChildren(children) {
    let hasDirectRows = false;
    let header = null, items = null, footer = null;
    Children.map(children, child => {
      if (child.type === Header) return header = child;
      else if (child.type === Footer) return footer = child;
      else if (child.type === Row) hasDirectRows = true;

      if (!items) items = [];
      items.push(child);
    });

    if (hasDirectRows) {
      items = <ul style={styles.list}>{items}</ul>
    }

    return { header, items, footer };
  }

  render() {
    const { children, style, ...props } = this.props;

    const { header, items, footer } = this.mapChildren(children);

    return (
      <section style={{ ...styles.container, ...style }} {...props}>
        {header}
        <div ref="scrollable" style={{ ...styles.scrollable }}>
          {items}
        </div>
        {footer}
      </section>
    );
  }
}

export default ListView;
