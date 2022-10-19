import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Btn from '../Btn/Btn';

/**
 * Кнопка обновления
 * @param {Object} props - пропсы,
 * @param {function} props.onClick - функция обработки нажатия на кнопку,
 */
export class UpdateBtn extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const btnProps = {
      ...this.props,
      type: 'update',
    };

    return (
        <Btn {...btnProps}>&#128472;</Btn>
    )
  }
}

export default UpdateBtn