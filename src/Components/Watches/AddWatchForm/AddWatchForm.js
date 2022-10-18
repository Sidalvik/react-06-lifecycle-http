import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class AddWatchForm extends Component {
  static propTypes={
    form: PropTypes.shape({
      city: PropTypes.string,
      timeZone: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    addWatch: PropTypes.func,
  }

  render() {
    const {form, handleChange, addWatch: handleClick } = this.props;

    return (
        <form className='add-watch-form'>
          <div className="input-group">
            <label htmlFor="city">Название</label>
            <input type="text" id='city' name='city' value={form['city']} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="timeZone">Временная зона</label>
            <input type="number" id='timeZone' name='timeZone' value={form['timeZone']} onChange={handleChange} step='0.25' min={'-12'} max={'12'}/>
          </div>

            <button type='button' onClick={handleClick} className='add-watch-form__btn'>Добавить</button>
        </form>
    )
  }
}

export default AddWatchForm