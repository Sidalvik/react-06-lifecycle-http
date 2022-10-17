import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Arrow extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }


  render() {
    const {type, value} = this.props;
    const rotateDeg = 180 + value * (type === 'hours' ? 2 * 360 / 24 : 360 / 60 );
    const style = {
        transform: `rotate(${rotateDeg}deg)`,
    };

    return (
      <div className={'arrow arrow-' + type} style={style}></div>
    )
  }
}

export default Arrow