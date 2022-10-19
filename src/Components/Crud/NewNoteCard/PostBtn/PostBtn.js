import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Btn from '../../Btn/Btn';

/**
 * Кнопка записи
 * @param {Object} props - пропсы,
 * @param {function} props.onClick - функция обработки нажатия на кнопку,
 */
export class PostBtn extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const btnProps = {
      ...this.props,
      type: 'post',
    };

    return (
      <Btn {...btnProps}>&#10148;</Btn>
    )
  }
}

export default PostBtn