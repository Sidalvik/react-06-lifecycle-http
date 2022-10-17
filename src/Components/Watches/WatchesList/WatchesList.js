import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class WatchesList extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const {className} = this.props;

    return (
        <section className={(className || '') + ' watches-list'}>
            {this.props.children}
        </section>
    )
  }
}

export default WatchesList