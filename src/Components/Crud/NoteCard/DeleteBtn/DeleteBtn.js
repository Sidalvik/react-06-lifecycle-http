import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Btn from '../../Btn/Btn';

/**
 * Кнопка обновления
 * @param {Object} props - пропсы,
 * @param {function} props.onClick - функция обработки нажатия на кнопку,
 */
export class DeleteBtn extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const btnProps = {
      ...this.props,
      type: 'delete',
    };

    return (
        <Btn {...btnProps}>&#10060;</Btn>
    )
  }
}

export default DeleteBtn