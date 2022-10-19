import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PostBtn from './PostBtn/PostBtn';

/**
 * Карточка ввода новой заметки
 * @param {Object} props - пропсы,
 * @param {string} props.content - текст заметки,
 * @param {function} props.onClick - функция обработчик нажатия кнопки,
 * @param {function} props.onChange - функция обработчик изменения поля ввода,
 */
export class NewNoteCard extends Component {
  static propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const {content, onClick: handleBtnClick, onChange: handleTextChange} = this.props;

    return (
      <div className='new-note'>
        <label htmlFor="new-content">New note</label>
        <textarea name="new-content" id="new-content"  rows="7" onChange={handleTextChange} value={content}></textarea>
        <PostBtn onClick = {handleBtnClick}/>
      </div>
    )
  }
}

export default NewNoteCard