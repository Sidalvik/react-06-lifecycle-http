import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddWatchForm from './AddWatchForm/AddWatchForm';


export class Watches extends Component {
  static propTypes = {
    props:  PropTypes.any,
  };

  state = {
    watchesList: [
        {city: 'New York', timeZone: -5, interval: null,},
        {city: 'Moscow', timeZone: +3, interval: null,},
        {city: 'London', timeZone: +5, interval: null,},
        {city: 'Tokyo', timeZone: +13, interval: null,},
    ],
    inputs: {
      city: '',
      timeZone: '',
    },
  };

  getCurrentTimeZone = () => {
    return (new Date()).getTimezoneOffset() / -60;
  }

  handleChange =  (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'timeZone' && Number.isNaN(value)) return;
    this.setState({...this.state, inputs: {...this.state.inputs, [name]: value}});
  }

  addWatch = () => {
    if (!this.state.inputs?.['city'] || !this.state.inputs?.['timeZone']) {
        return;
    }

    const newState =  {
        watchesList: [...this.state.watchesList, {...this.state.inputs, interval: null}],
        inputs: {
          city: '',
          timeZone: '',
        },
    }

    this.setState(newState);

    console.log('addWatch');
  }

  closeWatch = function () {
    console.log('closeWatch');
  }


  render() {
    return (
      <div>
        <AddWatchForm form = {this.state.inputs} handleChange = {this.handleChange} addWatch = {this.addWatch}/>
        <section className='watches-list'>
            <p>часы 1</p>
            <p>часы 2</p>
            <p>часы 3</p>
        </section>
      </div>
    )
  }
}

export default Watches