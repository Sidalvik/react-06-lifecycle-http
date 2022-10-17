import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class CloseBtn extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {className, onClick} = this.props;

    return (
      <button className={(className || '') + ' close-btn'} onClick={onClick}>x</button>
    )
  }
}

export default CloseBtn