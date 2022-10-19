import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DeleteBtn from './DeleteBtn/DeleteBtn';

/**
 * Карточка заметки
 * @param {Object} props - пропсы,
 * @param {number} props.id - id заметки,
 * @param {string} props.children - контент заметки,
 * @param {function} props.onBtnClick - функция обработчик нажатия кнопки,
 */
export class NoteCard extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  }

  render() {
    const {children, id, onBtnClick: handleBtnClick} = this.props;

    return (
      <div className='note-card'>
        {children}
        <DeleteBtn onClick = {() => handleBtnClick(id)}/>
      </div>
    )
  }
}

export default NoteCard