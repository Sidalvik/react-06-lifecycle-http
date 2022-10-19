import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Кнопка
 * @param {Object} props - пропсы,
 * @param {any} props.children - потомки компонента,
 * @param {string} props.type - функциональный тип кнопки,
 * @param {function} props.onClick - функция обработки нажатия на кнопку,
 */
export class Btn extends Component {
  static propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {children, type, onClick: handleClick} = this.props;

    return (
      <button className={'btn' + (type ? ' btn-' + type : '')} onClick={handleClick}>
        {children || 'Нажать'}
      </button>
    )
  }
}

export default Btn